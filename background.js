// background.js

let flaggedProductsCount = 0;

// Listen for messages from content script and popup script
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'updateFlaggedStatus') {
    flaggedProductsCount = request.flaggedProductsCount;
  }
});

// Listen for page load events
chrome.webNavigation.onCompleted.addListener((details) => {
  // Check if the URL is an Amazon page
  if (details.url.includes('www.amazon.in')) {
    // Send a message to the content script with the flagged status
    chrome.tabs.sendMessage(details.tabId, { action: 'displayWarning', flaggedProductsCount });
  }
});
