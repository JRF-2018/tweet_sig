/*
 * check_comp.js of tweet_sig
 *
 * Time-stamp: <2018-01-12T08:42:28Z>
 */

const a = document.querySelector("div.tweet-complete a");

if (a && 'href' in a) {
  chrome.runtime.sendMessage({type: "comp", url: a.href});
} else {
  chrome.runtime.sendMessage({type: "comp-error"}, x => {
    if (x) {
      alert("Parse Error: Maybe 'Twitter' has been updated.");
    }
  });
}
