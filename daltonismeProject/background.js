// Première option : mettre en évidence les liens

let highlightLink = "rgb(49, 119, 250)"  

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ highlightLink });
  console.log('Default text link set to %cblue', `color: ${ highlightLink }`);
});


// Deuxième option : URGENCE

let blackBackground = "rgb(0, 0, 0)"
let whiteFont = "rgb(254, 254, 226)"

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ blackBackground });
  chrome.storage.sync.set({ whiteFont });
  console.log('Default webpage color background set to %cblack', `color: ${ blackBackground }`);
  console.log('Default webpage color font set to %cwhite', `color: ${ whiteFont }`)
});


// Troisième option : escroquerie

let extension = "https://chrome.google.com/webstore/detail/colorblind-dalton-for-goo/afcafnelafcgjinkaeohkalmfececool"  

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ extension });
  console.log('Default link to get new %cadd-on', `color: ${ extension }`);
});