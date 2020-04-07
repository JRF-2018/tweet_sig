/*
 * check_fbpp.js of tweet_sig
 *
 * Time-stamp: <2018-01-18T06:11:58Z>
 */

chrome.runtime.sendMessage({type: "get-text"}, text => {
  if (text != null) {
    document.getElementById('textarea').value = text;
  }
});

document.addEventListener("fbcomplete", e => {
  chrome.runtime.sendMessage({type: "comp", url: e.detail.url});
}, false);

document.addEventListener("fberror", e => {
  chrome.runtime.sendMessage({type: "auth-error"});
}, false);
