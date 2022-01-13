// Première option : augmenter les contrastes 

/*
let contrast = document.getElementById("contrast");

chrome.storage.sync.get("contrastColor", ({contrastColor}) => {
  contrast.style.
};
*/

// Deuxième option : mettre en évidence les liens

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
      console.log(listeLien[i])
      listeLien[i].style.backgroundColor = highlightLink;
    }
    //document.querySelectorAll("a").style.backgroundColor = highlightLink;
  });
}

// Troisième option : visualiser les actions avec des icônes 



