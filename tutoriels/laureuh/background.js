// background.js

// changement couleur background
let color = '#3aa757';

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ color });
  console.log('Default background color set to %cgreen', `color: ${color}`);
});

// changement couleur h1
let textColor = "#f999b7";

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ textColor });
  console.log('Default text color set to %cpink', `color: ${textColor}`);
});