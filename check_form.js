/*
 * check_form.js of tweet_sig
 *
 * Time-stamp: <2018-01-13T10:41:25Z>
 */

//console.log("check_form.js: ok");

let scriptId;
const d1 = document.getElementById('tweet-sig-in');
const d2 = document.getElementById('tweet-sig-out');

if (d1 && d2) {
  chrome.runtime.sendMessage({type: 'form-init'}, id => { scriptId = id; });

  chrome.runtime.onMessage.addListener((req, sender, sendResponse) => {
    if (req.id != scriptId) return;
    if (req.type == 'tweet-sig-in') {
      const d = document.getElementById('tweet-sig-in');
      if (! d) {
	sendResponse(null);
      } else if (d.nodeName == 'INPUT') {
	sendResponse(d.value);
      } else {
	sendResponse(d.textContent);
      }
    } else if (req.type == 'tweet-sig-out') {
      const d = document.getElementById('tweet-sig-out');
      if (! d) {
	// do nothing.
      } else if (d.nodeName == 'INPUT') {
	d.value = req.url;
      } else {
	d.textContent = req.url;
      }
      if (d) d.dispatchEvent(new Event('change', {bubbles: true}));
    }
  });

  window.addEventListener("pageshow", e => {
    chrome.runtime.sendMessage({type: "show-icon", id: scriptId});
  }, false);

  window.addEventListener("pagehide", e => {
    chrome.runtime.sendMessage({type: "hide-icon"});
  }, false);
}
