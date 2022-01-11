// background.js

// changement couleur background
let color = '#142270';

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ color });
  console.log('Default background color set to %cgreen', `color: ${color}`);
});

// changement couleur h1
let textColor = "#f99";

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ textColor });
  console.log('Default text color set to %cpink', `color: ${textColor}`);
});

let fontSize = "20px";

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ fontSize });
  console.log('Default font size set to 20px');
});

let borderColor = "15px inset #FF7777";

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ borderColor });
  console.log('Default color border set to RED');
});

