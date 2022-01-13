// Première option : contraste des couleurs

let contrastColor = "constrast(1.75)"

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ contrastColor });
  console.log('Default color set to %cconstrat', `color: ${contrastColor}`);
});


// Deuxième option : mettre en évidence les liens

let highlightLink = "#FF5733"

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ highlightLink });
  console.log('Default text link set to %csaumon', `color: ${highlightLink}`);
});
