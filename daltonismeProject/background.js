// Première option : Black and White style

var canvas = document.getElementById('myCanvas');
var gl = canvas.getContext('webgl');

// let blackBackground =  "#000000"

// chrome.runtime.onInstalled.addListener(() => {
//   chrome.storage.sync.set({ blackBackground });
//   console.log('Default text link set to %cblack', `color: ${blackBackground}`);
// });


// Deuxième option : mettre en évidence les liens si le background est foncé




let highlightLink = "#FF5733"

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ highlightLink });
  console.log('Default text link set to %csaumon', `color: ${highlightLink}`);
});

// Troisième option : mise en évidence les liens si le background est clair :

//let highlightLinkLight = "#f9e939"

// chrome.runtime.onInstalled.addListener(() => {
//   chrome.storage.sync.set({ highlightLinkLight });
//   console.log('Default text link set to %cyellow', `color: ${highlightLinkLight}`);
// });


