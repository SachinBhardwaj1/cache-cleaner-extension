// Function to update the badge text with the remaining time in minutes
function updateBadge() {
  chrome.storage.local.get(['interval', 'lastClearTime'], (result) => {
    const interval = result.interval || 30;
    const lastClearTime = result.lastClearTime || Date.now();
    const nextClearTime = lastClearTime + interval * 60 * 1000;
    const now = Date.now();
    const diffInMinutes = Math.ceil((nextClearTime - now) / 60000);

    if (diffInMinutes > 0) {
      chrome.action.setBadgeText({ text: diffInMinutes.toString() });
      chrome.action.setBadgeBackgroundColor({ color: '#4688F1' });
    } else {
      chrome.action.setBadgeText({ text: '' });
    }
  });
}

// Set up the initial alarm and badge when the extension is installed
chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.local.set({
    dataTypes: {
      cache: true,
      history: false,
      cookies: false,
      formData: false
    },
    interval: 30,
    lastClearTime: Date.now()
  }, () => {
    chrome.alarms.create('clearData', { periodInMinutes: 30 });
    chrome.alarms.create('updateBadge', { periodInMinutes: 1 });
    updateBadge();
  });
});

// Listen for messages to update the alarm interval
chrome.runtime.onMessage.addListener((message) => {
  if (message.type === 'SET_ALARM') {
    chrome.alarms.clear('clearData', () => {
      chrome.alarms.create('clearData', { periodInMinutes: message.interval });
      chrome.storage.local.set({ interval: message.interval }, () => {
        updateBadge();
      });
    });
  }
});

// Handle alarm events
chrome.alarms.onAlarm.addListener((alarm) => {
  if (alarm.name === 'clearData') {
    chrome.storage.local.get(['dataTypes'], (result) => {
      const dataTypes = result.dataTypes || {};
      chrome.browsingData.remove(
        { since: 0 },
        dataTypes,
        () => {
          console.log("Selected browsing data cleared.");
          chrome.storage.local.set({ lastClearTime: Date.now() }, () => {
            updateBadge();
          });
        }
      );
    });
  } else if (alarm.name === 'updateBadge') {
    updateBadge();
  }
});
