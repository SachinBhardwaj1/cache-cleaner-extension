document.addEventListener('DOMContentLoaded', () => {
  const CONFIG = {
    dataTypes: ['cache', 'cookies', 'history', 'formData', 'downloads'],
    minInterval: 1,
    maxInterval: 1440, // 24 hours in minutes
    defaultInterval: 30
  };
  
  const elements = {
    intervalInput: document.getElementById('interval'),
    timerDisplay: document.getElementById('timer'),
    form: document.getElementById('settingsForm'),
    status: document.getElementById('status')
  };

  let countdownInterval;

  function showStatus(message, isError = false) {
    const statusElement = elements.status;
    if (!statusElement) {
        console.warn('Status element not found');
        return;
    }
    
    statusElement.textContent = message;
    statusElement.className = `status-message ${isError ? 'error' : 'success'}`;
    setTimeout(() => {
        if (statusElement) {
            statusElement.textContent = '';
        }
    }, 3000);
}

  function validateInterval(value) {
    const interval = parseInt(value, 10);
    if (isNaN(interval) || interval < CONFIG.minInterval || interval > CONFIG.maxInterval) {
      throw new Error(`Interval must be between ${CONFIG.minInterval} and ${CONFIG.maxInterval} minutes`);
    }
    return interval;
  }

  function updateCountdown(nextClearTime) {
    const now = Date.now();
    const diff = nextClearTime - now;
    
    if (diff <= 0) {
      elements.timerDisplay.textContent = '00:00';
      return false;
    }
    
    const minutes = Math.floor(diff / 60000);
    const seconds = Math.floor((diff % 60000) / 1000);
    elements.timerDisplay.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    return true;
  }

  // Load settings
  chrome.storage.local.get(['dataTypes', 'interval', 'lastClearTime'])
    .then(result => {
      const savedDataTypes = result.dataTypes || {};
      CONFIG.dataTypes.forEach(type => {
        const checkbox = document.getElementById(type);
        if (checkbox) {
          checkbox.checked = savedDataTypes[type] || false;
        }
      });

      elements.intervalInput.value = result.interval || CONFIG.defaultInterval;

      // Calculate and display countdown
      const lastClearTime = result.lastClearTime || Date.now();
      const intervalMs = (result.interval || CONFIG.defaultInterval) * 60 * 1000;
      const nextClearTime = lastClearTime + intervalMs;

      if (countdownInterval) {
        clearInterval(countdownInterval);
      }
      
      updateCountdown(nextClearTime);
      countdownInterval = setInterval(() => updateCountdown(nextClearTime), 1000);
    })
    .catch(error => {
      showStatus('Failed to load settings: ' + error.message, true);
    });

  // Save settings
  elements.form.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    try {
      const interval = validateInterval(elements.intervalInput.value);
      const newDataTypes = {};
      
      CONFIG.dataTypes.forEach(type => {
        const checkbox = document.getElementById(type);
        if (checkbox) {
          newDataTypes[type] = checkbox.checked;
        }
      });

      if (!Object.values(newDataTypes).some(value => value)) {
        throw new Error('Please select at least one data type to clear');
      }

      await chrome.storage.local.set({ 
        dataTypes: newDataTypes, 
        interval,
        lastClearTime: Date.now() // Reset the last clear time
      });
      
      await chrome.runtime.sendMessage({ type: 'SET_ALARM', interval });
      
      // Update timer display
      const nextClearTime = Date.now() + (interval * 60 * 1000);
      if (countdownInterval) {
        clearInterval(countdownInterval);
      }
      updateCountdown(nextClearTime);
      countdownInterval = setInterval(() => updateCountdown(nextClearTime), 1000);
      
      showStatus('Settings saved successfully!');
    } catch (error) {
      showStatus(error.message, true);
    }
  });
});