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
| Data Storage        | \`chrome.storage.local\`          |
| Alarms & Timing     | \`chrome.alarms\` API             |
| Badge Updates       | \`chrome.action.setBadgeText\`    |
| Browsing Data Clearing | \`chrome.browsingData.remove\` |

## 📁 Project Structure

  ![Screenshot 2025-04-17 at 00 28 17](https://github.com/user-attachments/assets/f2cc2561-337d-47f4-b209-d766d1a15c21)


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

  ![Screenshot 2025-04-16 at 23 57 55](https://github.com/user-attachments/assets/67507f30-c108-4d67-be91-d713bb1544be)

  ![Screenshot 2025-04-16 at 23 58 17](https://github.com/user-attachments/assets/74040855-c7bf-478f-8f85-082280553507)

  ![Screenshot 2025-04-16 at 23 58 33](https://github.com/user-attachments/assets/df5b3ed7-d9f0-4d47-99ef-ad202e6289a3)

  ![Screenshot 2025-04-16 at 23 59 23](https://github.com/user-attachments/assets/81585040-3b8d-4d29-bc2c-697730cf98a0)

  ![Screenshot 2025-04-17 at 00 08 48](https://github.com/user-attachments/assets/ae3b4834-b725-41fa-9476-7673677e9c49)


## 🛠 Future Improvements

- [ ] Add dark mode to the popup
- [ ] Add custom notification once clearing happens
- [ ] Optional auto-pause when on critical websites

## 🤝 Contributions

Contributions are welcome!  
Please fork the repository and create a pull request to the branch named **bugfixes** for any enhancements, feedback, or bug fixes.

</body>
</html>
