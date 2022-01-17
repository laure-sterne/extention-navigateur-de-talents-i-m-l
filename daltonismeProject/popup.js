// Première option : augmenter les contrastes 


// let contrast = document.getElementById("contrast");

// chrome.storage.sync.get("contrastColor", ({contrastColor}) => {
//   contrast.style.backgroundColor = contrastColor
// });

// contrast.addEventListener("click", async () => {
//   let [tab] = await chrome.tabs.query({ active : true, currentWindow: true});

//   chrome.scripting.executeScript({
//     target : { tabId: tab.id },
//     function : setColorContrast,
//   });
// });


// function setColorContrast() {
//   chrome.storage.sync.get("contrastColor", ({contrastColor}) => {
//     let 
//   })
// }


var requestURL = ''; 

// Deuxième option : mettre en évidence les liens si le background est foncé 

let highlight = document.getElementById("highlight");

chrome.storage.sync.get("highlightLinkLight", ({ highlightLinkClear }) => {
  highlight.style.backgroundColor = highlightLink
});

highlight.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: setPageLink,
  });
});

let colorBrightness = element.style.getPropertyValue("--backgroundColor");
function setPageLink() {
  if(colorBrightness <= 50%)
    chrome.storage.sync.get("highlightLinkLight", ({ highlightLinkLight }) => {
      let listeLien = document.querySelectorAll("a")
    for (i = 0; i < listeLien.length; i++) {
      console.log(listeLien[i])
      listeLien[i].style.backgroundColor = highlightLinkLight;
    }
  });
}





