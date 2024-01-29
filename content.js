// content.js

// Send a message to the extension with the search query
const searchQuery = window.location.search.match(/(?:\?|&)k=([^&]*)/);
if (searchQuery) {
  chrome.runtime.sendMessage({ searchQuery: decodeURIComponent(searchQuery[1]) });
}
