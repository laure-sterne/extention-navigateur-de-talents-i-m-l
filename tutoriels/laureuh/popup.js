// changement background color en kesketuveu
let changeColor = document.getElementById("changeColor");

chrome.storage.sync.get("color", ({ color }) => {
  changeColor.style.backgroundColor = color;
});

// When the button is clicked, inject setPageBackgroundColor into current page
changeColor.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: setPageBackgroundColor,
  });
});
  
// The body of this function will be executed as a content script inside the current page
function setPageBackgroundColor() {
  chrome.storage.sync.get("color", ({ color }) => {
    document.body.style.backgroundColor = color;
  });
}


// changement h1 en couleur rose
let changeTextColor = document.getElementById("changeTextColor");

// changement du carrrrééééé dans la poppop
chrome.storage.sync.get("textColor", ({ textColor }) => {
    changeTextColor.style.backgroundColor = textColor;
});
  
changeTextColor.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: setPageTextColor,
      });
    });
    
function setPageTextColor() {
    chrome.storage.sync.get("textColor", ({ textColor }) => {
      document.querySelector("div").style.color = textColor;
    });
}


// font size change
let changeFontSize = document.getElementById("changeFontSize");

chrome.storage.sync.get("fontSize", ({ fontSize }) => {
  changeFontSize.style.backgroundColor = fontSize;
});

changeFontSize.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: setFontSize,
  });
});
  
function setFontSize() {
  chrome.storage.sync.get("fontSize", ({ fontSize }) => {
    document.body.style.fontSize = fontSize;
  });
}


// Border color change
let changeBorderColor = document.getElementById("changeBorderColor");

chrome.storage.sync.get("borderColor", ({ borderColor }) => {
  changeBorderColor.style.backgroundColor = borderColor;
});
      
changeBorderColor.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
        
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: setChangeBorderColor,
      });
});
        
function setChangeBorderColor() {
  chrome.storage.sync.get("borderColor", ({ borderColor }) => {
    let allImages = document.querySelectorAll("img");
    for (let img of allImages) {
      img.style.border = borderColor;
    }
  });
};


// // replace images by another image
// let changeImage = document.getElementById("changeImage");

// chrome.storage.sync.get("color", ({ color }) => {
//   changeImage.style.backgroundColor = "#FFC93C";
// });

// changeImage.addEventListener("click", async () => {
//   let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  
//   chrome.scripting.executeScript({
//     target: { tabId: tab.id },
//     function: setCatImage,
//   });
// });
  
// function setCatImage() {
//   chrome.storage.sync.get("catPic", ({ catPic }) => {
//     let allImages = document.querySelectorAll("img");
//     //let newImage = document.getElementById("img").src = "images/catpic.png";
//      for (let img of allImages) {
//        img.src = catPic
//      }
//   });
// };


// GIF
let changeGif = document.getElementById("changeGif");

chrome.storage.sync.get("pokemonGif", ({ pokemonGif })=> {
  changeGif.style.backgroundImage = pokemonGif;
});

changeGif.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: setPokemonGif,
  });
});
  
function setPokemonGif() {
  chrome.storage.sync.get("pokemonGif", ({ pokemonGif }) => {
    let allImages = document.querySelectorAll("img");
     for (let img of allImages) {
       img.src = pokemonGif
     }
  });
};