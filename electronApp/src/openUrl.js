(function () {
	const {remote} = require('electron');

	//内嵌的browserView
	const mainWin = remote.getCurrentWindow();
	let browserView = new remote.BrowserView();
	mainWin.setBrowserView(browserView);
	browserView.setBounds({x: 0, y: 200, height: 500, width: 1500});

	let ele = document.querySelector('#zhihu');
	let url = ele.getAttribute('href');
	browserView.webContents.loadURL(url)
		.catch(err => console.log(err));

	//打开子窗口
	let btn = document.getElementById('btnOpen');
	btn.onclick = function (e) {
		e.preventDefault();
		window.open(url);
	}

	/**
	 * window.open   vs   BrowserWindow
	 *
	 * window.open 默认就是子窗口
	 * BrowserWindow 就是一个窗口
	 */
})();
