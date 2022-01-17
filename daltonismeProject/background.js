// Première option : contraste des couleurs

// let contrastColor = "constrast(1.75)"

// chrome.runtime.onInstalled.addListener(() => {
//   chrome.storage.sync.set({ contrastColor });
//   console.log('Default color set to %cconstrat', `color: ${contrastColor}`);
// });


// Deuxième option : mettre en évidence les liens si le background est foncé


let highlightLinkDark = "#FF5733"

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ highlightLinkDark });
  console.log('Default text link set to %csaumon', `color: ${highlightLinkDark}`);
});

// Troisième option : mise en évidence les liens si le background est clair :

let highlightLinkLight = "#f9e939"

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ highlightLinkLight });
  console.log('Default text link set to %cyellow', `color: ${highlightLinkLight}`);
});


