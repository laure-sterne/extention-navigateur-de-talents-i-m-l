// Première option : contraste des couleurs

let contrastColor = "constrast(1.75)"


chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ contrastColor });
  console.log('Default color set to %cconstrat', `color: ${contrastColor}`);
});


// Deuxième option : mettre en évidence les liens

let highlightLink = "rgb(236, 251, 82)"  

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ highlightLink });
  console.log('Default text link set to %cyellow', `color: ${highlightLink}`);
});