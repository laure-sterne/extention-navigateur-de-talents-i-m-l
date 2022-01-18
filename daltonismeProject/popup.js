// Première option : mettre en évidence les liens si la checkboc est checked

let highlight = document.getElementById("highlight");

chrome.storage.sync.get("highlightLink", ({ highlightLink }) => {
  highlight.style.backgroundColor = highlightLink
});

highlight.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: setPageLink,
  });
});


function setPageLink() {
  chrome.storage.sync.get("highlightLink", ({ highlightLink }) => {
    let listeLien = document.querySelectorAll("a")
  
    for (i = 0; i < listeLien.length; i++) {
      if(listeLien[i].style.backgroundColor == highlightLink){
        listeLien[i].style.backgroundColor = ''
      } else {
        listeLien[i].style.backgroundColor = highlightLink;
      }
    }
  });
}


// Deuxième option : URGENCE

let blackAndWhite = document.getElementById("blackAndWhite");

chrome.storage.sync.get("blackBackground", ({ blackBackground }) => {
  blackAndWhite.style.backgroundColor = blackBackground
});

chrome.storage.sync.get("whiteFont", ({ whiteFont }) => {
  blackAndWhite.style.color = whiteFont
});

blackAndWhite.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: setSober,
  });
});


function setSober() {
  chrome.storage.sync.get("blackBackground", ({ blackBackground }) => {
    if(document.body.style.backgroundColor !== blackBackground){
      document.body.style.backgroundColor = blackBackground
    } else {
      document.body.style.backgroundColor = '';
    }
  });

  chrome.storage.sync.get("whiteFont", ({ whiteFont }) => {
    if(document.body.style.color !== whiteFont){
      document.body.style.color = whiteFont
    } else {
      document.body.style.color = '';
    }
  });
}


// Troisième option : escroquerie

// let highlight = document.getElementById("highlight");

// chrome.storage.sync.get("highlightLink", ({ highlightLink }) => {
//   highlight.style.backgroundColor = highlightLink
// });

// highlight.addEventListener("click", async () => {
//   let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

//   chrome.scripting.executeScript({
//     target: { tabId: tab.id },
//     function: setPageLink,
//   });
// });


// function setPageLink() {
//   chrome.storage.sync.get("highlightLink", ({ highlightLink }) => {
//     let listeLien = document.querySelectorAll("a")
  
//     for (i = 0; i < listeLien.length; i++) {
//       if(listeLien[i].style.backgroundColor == highlightLink){
//         listeLien[i].style.backgroundColor = ''
//       } else {
//         listeLien[i].style.backgroundColor = highlightLink;
//       }
//     }
//   });
// }
