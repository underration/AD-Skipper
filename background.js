chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
	if (message.action === "goBackAndForth") {
	  chrome.tabs.goBack(sender.tab.id, () => {
		setTimeout(() => {
		  chrome.tabs.goForward(sender.tab.id);
		}, 200); // 0.2秒後に戻る
	  });
	}
  });