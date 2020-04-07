/*
 * clipboard.js of tweet_sig
 *
 * Time-stamp: <2018-01-16T17:10:56Z>
 */

chrome.runtime.onMessage.addListener(handleMessage);

function handleMessage (req, sender, sendResponse) {
  if (req.type == "copy-clipboard") {
//    chrome.runtime.onMessage.removeListener(handleMessage);
    copyToClipboard(req.text);
    sendResponse();
  }
}

/* Referred to https://github.com/hnakamur/FormatLink-Firefox/blob/master/clipboard-helper.js */

function copyToClipboard (text) {
  function oncopy (event) {
    document.removeEventListener('copy', oncopy, true);

    event.stopImmediatePropagation();
    event.preventDefault();

    event.clipboardData.setData('text/plain', text);
  }

  document.addEventListener('copy', oncopy, true);
  document.execCommand('copy');
}
