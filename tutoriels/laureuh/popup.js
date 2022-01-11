// changement background color en kesketuveu
let changeColor = document.getElementById("changeColor");

chrome.storage.sync.get("color", ({ color }) => {
  changeColor.style.backgroundColor = color;
});

// // When the button is clicked, inject setPageBackgroundColor into current page
changeColor.addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: setPageBackgroundColor,
    });
  });
  
//   // The body of this function will be executed as a content script inside the
//   // current page
  function setPageBackgroundColor() {
    chrome.storage.sync.get("color", ({ color }) => {
      document.body.style.backgroundColor = color;
    });
  }


  // changement h1 en couleur rose
  let changeTextColor = document.getElementById("changeTextColor");

  //changement du carrrrééééé dans la poppop
  chrome.storage.sync.get("textColor", ({ textColor }) => {
    changeTextColor.style.backgroundColor = textColor;
  });
  
  // When the button is clicked, inject setPageBackgroundColor into current page
  changeTextColor.addEventListener("click", async () => {
      let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    
      chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: setPageTextColor,
      });
    });
    
    // The body of this function will be executed as a content script inside the
    // current page
    function setPageTextColor() {
      chrome.storage.sync.get("textColor", ({ textColor }) => {
        document.querySelector("div").style.color = textColor;
      });
    }

    //font size change
    let changeFontSize = document.getElementById("changeFontSize");

chrome.storage.sync.get("fontSize", ({ fontSize }) => {
  changeFontSize.style.backgroundColor = fontSize;
});

// // When the button is clicked, inject setPageBackgroundColor into current page
changeFontSize.addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: setFontSize,
    });
  });
  
//   // The body of this function will be executed as a content script inside the
//   // current page
  function setFontSize() {
    chrome.storage.sync.get("fontSize", ({ fontSize }) => {
      document.body.style.fontSize = fontSize;
    });
  }