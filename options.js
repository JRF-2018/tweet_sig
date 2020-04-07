/*
 * options.js of tweet_sig
 *
 * Time-stamp: <2018-01-23T09:07:09Z>
 */

var settings;

function $ (aSelector, aNode) {
  return (aNode || document).querySelector(aSelector);
}

function updateSettings () {
  return new Promise ((rs, rj) => {
    chrome.runtime.sendMessage({
      type: "update-settings",
      settings: settings
    }, rs);
  });
}

function redrawSettings () {
  chrome.runtime.sendMessage({type: "get-settings"}, res => {
    settings = res.settings;

    $('#settings-closeTweetTab').checked = settings.closeTweetTab;
    $('#settings-addCite').checked = settings.addCite;
    $('#settings-citeOpen').value = settings.citeOpen;
    $('#settings-citeClose').value = settings.citeClose;
    $('#settings-addTitle').checked = settings.addTitle;
    $('#settings-titleOpen').value = settings.titleOpen;
    $('#settings-titleClose').value = settings.titleClose;
    $('#settings-serviceAlways').checked = settings.serviceAlways;
    let sel = $('#settings-selectedService');
    for (let i = 0; i < sel.options.length; i++) {
      if (sel.options[i].value == settings.selectedService) {
	sel.options[i].selected = true;
	break;
      }
    }
  });
}

$('#settings-closeTweetTab').addEventListener('click', e => {
  settings.closeTweetTab = $('#settings-closeTweetTab').checked;
  updateSettings().then(() => {
    redrawSettings();
  });
});

$('#settings-addCite').addEventListener('click', e => {
  settings.addCite = $('#settings-addCite').checked;
  updateSettings().then(() => {
    redrawSettings();
  });
});

$('#settings-citeOpen').addEventListener('change', e => {
  settings.citeOpen = $('#settings-citeOpen').value;
  updateSettings().then(() => {
    redrawSettings();
  });
});

$('#settings-citeClose').addEventListener('change', e => {
  settings.citeClose = $('#settings-citeClose').value;
  updateSettings().then(() => {
    redrawSettings();
  });
});

$('#settings-addTitle').addEventListener('click', e => {
  settings.addTitle = $('#settings-addTitle').checked;
  updateSettings().then(() => {
    redrawSettings();
  });
});

$('#settings-titleOpen').addEventListener('change', e => {
  settings.titleOpen = $('#settings-titleOpen').value;
  updateSettings().then(() => {
    redrawSettings();
  });
});

$('#settings-titleClose').addEventListener('change', e => {
  settings.titleClose = $('#settings-titleClose').value;
  updateSettings().then(() => {
    redrawSettings();
  });
});

$('#settings-serviceAlways').addEventListener('click', e => {
  settings.serviceAlways = $('#settings-serviceAlways').checked;
  updateSettings().then(() => {
    redrawSettings();
  });
});

$('#settings-selectedService').addEventListener('change', e => {
  settings.selectedService = $('#settings-selectedService').value;
  updateSettings().then(() => {
    redrawSettings();
  });
});

//$('#redirect-url').value = chrome.identity.getRedirectURL();

redrawSettings();
