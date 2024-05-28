function detectAd() {
	const adContainer = document.querySelector('.ad-showing');
	if (adContainer) {
	  // 広告が表示されている場合、メッセージを送信
	  chrome.runtime.sendMessage({ action: "goBackAndForth" });
	}
  }

setInterval(detectAd, 500); // 0.15秒ごとに広告を検出