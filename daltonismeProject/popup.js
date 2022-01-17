// Option d'urgence : background white, font black, 


// let blackAndWhite = document.getElementById("blackAndWhite");
// chrome.storage.sync.get("blackBackground", ({blackBackground}) => {
//   blackAndWhite.style = blackBackground
// });
// blackAndWhite.addEventListener("click", async () => {
//   let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

//   chrome.scripting.executeScript({
//     target: { tabId: tab.id },
//     function: setPageLink,
//   });
// });

// function setBlackAndWhite() {

//   chrome.storage.sync.get("blackBackground", ({ blackBackground }) => {
//     document.getElementById("myDiv").style.backgroundColor = "black";
//   });



// Deuxième option : mettre en évidence les liens si le background est foncé 

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
  });
}




}
