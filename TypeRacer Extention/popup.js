// var app = chrome.runtime.getBackgroundPage();

function BotMode() {
  chrome.tabs.executeScript({
    file: 'BotMode.js'
  });
}

function ManualMode() {
  chrome.tabs.executeScript({
    file: 'ManualMode.js'
  });
}

function SpeechToText() {
  chrome.tabs.executeScript({
    file: 'speechtotext.js'
  });
}

document.getElementById('BotMode').addEventListener('click', BotMode);
document.getElementById('ManualMode').addEventListener('click', ManualMode);
document.getElementById('btnGiveCommand').addEventListener('click', SpeechToText);
