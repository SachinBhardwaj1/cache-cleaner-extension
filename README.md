🧹 **AutoClear** is a lightweight, privacy-first Chrome and Safari extension that automatically clears selected browsing data at user-defined intervals — without logging you out from websites you're actively using.

## 🛡️ Why AutoClear?

✅ **No Interruption:** Stay logged in to your applications without any disruption.  
✅ **Full Control:** Select exactly what you want to clear (Cache, Cookies, History, Autofill) through an easy-to-use popup.  
✅ **Privacy First:** Runs locally — your data never leaves your machine.  
✅ **Performance Boost:** Helps your browser stay fast by periodically clearing excess storage.  
✅ **Badge Timer:** See real-time countdown (in seconds) directly on the extension’s icon.

## 📌 Overview

AutoClear offers **user-defined settings** and **real-time countdowns**.  
It supports:

- Dynamic timer (badge updates every second)
- Smart cache and storage cleaning
- Custom selection of what data to clear
- Works across Chrome, Safari (with WebKit support), and compatible browsers

## 🔧 Technologies Used

| Feature             | Tech/Method                   |
|---------------------|-------------------------------|
| Manifest Version    | Chrome Manifest v3             |
| Background Scripts  | Service Workers (background.js) |
| UI Components       | HTML5, CSS3, JavaScript         |
| Data Storage        | chrome.storage.local          |
| Alarms & Timing     | chrome.alarms API             |
| Badge Updates       | chrome.action.setBadgeText    |
| Browsing Data Clearing | chrome.browsingData.remove |

## 📁 Project Structure

  ![Screenshot 2025-04-18 at 18 44 30](https://github.com/user-attachments/assets/31b24140-c8f5-4e2c-9e3e-c4ef7e35a4a1)


## 🚀 Features

✅ Select specific data types to clear: Cache, History, Cookies, Autofill  
✅ Set the interval for auto-clearing (in minutes)  
✅ See the real-time countdown timer on the extension icon (seconds format)  
✅ Automatic smart clearing without logging you out  
✅ Lightweight, privacy-focused, and easy to use

## 📦 Setup Instructions

### 1. Clone or Download
    git clone [https://github.com/<your-username>/AutoClear.git](https://github.com/SachinBhardwaj1/cache-cleaner-extension)
    
    cd AutoClear

### 2. Load the Extension

- Open **Chrome** → **Extensions** (\`chrome://extensions/\`)
- Enable **Developer Mode**
- Click **Load Unpacked** → Select the project directory

(For Safari, load via Safari's Develop > Show Extension Builder.)

## 🧪 Testing

1. Set your preferred clearing options from the popup.
2. Set an interval (e.g., 10 minutes).
3. Watch the badge count down in seconds!
4. Data gets cleared automatically without signing you out.

## 🌟 Unique Selling Points (USP)

- **Privacy First:** Runs completely locally — no external servers or APIs involved.
- **No Relogin Hassle:** Unlike other extensions, it does NOT clear essential session cookies.
- **Developer-Like UI:** Clean, modern interface optimized for control and ease of use.
- **Real-Time Feedback:** Live badge timer showing countdown.
- **Cross-Browser Support:** Designed for Chrome and Safari browsers (modern Manifest v3 standards).

## 📸 Screenshot

  ![Screenshot 2025-04-16 at 23 57 29](https://github.com/user-attachments/assets/a9f8c4d2-3c31-4b54-bca4-71d4593c80e3)

  <img width="793" alt="Screenshot 2025-04-18 at 18 47 38" src="https://github.com/user-attachments/assets/26c94e2f-62ad-4d53-a912-dbf9b90822b3" />

  ![Screenshot 2025-04-18 at 18 48 37](https://github.com/user-attachments/assets/d290fee7-8680-4567-b3d9-fc5bbcbc5adf)


## 🛠 Future Improvements

- [ ] Add light and mode to the popup
- [ ] Add custom notification once clearing happens
- [ ] Optional auto-pause when on critical websites

## 🤝 Contributions

Contributions are welcome!  
Please fork the repository and create a pull request to the branch named **bugfixes** for any enhancements, feedback, or bug fixes.

</body>
</html>
