


// Deuxième option : mettre en évidence les liens si la checkboc est checked

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
        listeLien[i].style.backgroundColor = "transparent"
      } else {
        listeLien[i].style.backgroundColor = highlightLink;
      }
    }
  });
}


// Troisième option : visualiser les actions avec des icônes 



