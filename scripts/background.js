// chrome.runtime.onInstalled.addListener(() => {
//   chrome.action.setBadgeText({
//     text: "OFF",
//   });
// });

function clear() {
  console.log("clear");
  const test = document.querySelectorAll("*");

  test.forEach(function (element) {
    if (element.style.overflow === "hidden") {
      element.style.overflow = "scroll";
    }
    if (element.style.filter.startsWith("blur")) {
      element.style.filter = "none";
    }
    if (element.id === "HardsellOverlay") {
      // delete element;
      element.style.display = "none";
    }
  });

  function buttonClick() {
    console.log("button clicked");
    setTimeout(clear, 2000);
    setTimeout(clear, 4000);
    setTimeout(clear, 8000);
  }
  const html = document.querySelector("html");
  html.style.overflow = "scroll";

  const buttons = document.querySelectorAll("a");
  buttons.forEach(function (button) {
    try {
      button.addEventListener("click", buttonClick);
    } catch (error) {
      console.log(error);
    }
  });
}

chrome.action.onClicked.addListener(async (tab) => {
  console.log("tab", tab);
  // trigger content script
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: clear,
  });
});
