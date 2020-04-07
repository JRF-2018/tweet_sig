/*
 * popup.js of tweet_sig
 *
 * Time-stamp: <2018-01-06T12:20:20Z>
 */

var currentTabId;

function handleClick (e) {
  let div = e.target;
  while (div.parentNode && ! div.classList.contains('panel-list-item')) {
    div = div.parentNode;
  }
  if (! div.classList.contains('panel-list-item')) return;
  chrome.runtime.sendMessage({type: "click-popup", tabId: currentTabId,
			      id: div.id});
  e.stopPropagation();
}

//console.log("popup.js: ok");
document.addEventListener("click", handleClick, false);
chrome.tabs.query({currentWindow: true, active: true}, tabs => {
  currentTabId = tabs[0].id;
});
