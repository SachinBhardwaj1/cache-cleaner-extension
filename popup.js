document.addEventListener('DOMContentLoaded', () => {
  const dataTypes = ['cache', 'cookies', 'history', 'formData', 'downloads'];
  const intervalInput = document.getElementById('interval');
  const timerDisplay = document.getElementById('timer');

  // Load settings
  chrome.storage.local.get(['dataTypes', 'interval', 'lastClearTime'], (result) => {
    const savedDataTypes = result.dataTypes || {};
    dataTypes.forEach(type => {
      document.getElementById(type).checked = savedDataTypes[type] || false;
    });
    intervalInput.value = result.interval || 30;

    // Calculate and display countdown
    const lastClearTime = result.lastClearTime || Date.now();
    const intervalMs = (result.interval || 30) * 60 * 1000;
    const nextClearTime = lastClearTime + intervalMs;

    function updateCountdown() {
      const now = Date.now();
      const diff = nextClearTime - now;
      if (diff <= 0) {
        timerDisplay.textContent = '00:00';
        return;
      }
      const minutes = Math.floor(diff / 60000);
      const seconds = Math.floor((diff % 60000) / 1000);
      timerDisplay.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);
  });

  // Save settings
  document.getElementById('settingsForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const newDataTypes = {};
    dataTypes.forEach(type => {
      newDataTypes[type] = document.getElementById(type).checked;
    });
    const interval = parseInt(intervalInput.value, 10);
    chrome.storage.local.set({ dataTypes: newDataTypes, interval }, () => {
      chrome.runtime.sendMessage({ type: 'SET_ALARM', interval });
      alert('Settings saved!');
    });
  });
});
