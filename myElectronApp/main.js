const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const globalShortcut = electron.globalShortcut;

let mainWin = null;

function createWindow() {
	let area = electron.screen.getPrimaryDisplay().workArea;

	mainWin = new BrowserWindow({
		width: area.width,
		height: area.height,
		x: area.x,
		y: area.y,
		webPreferences: {
			nodeIntegration: true
		}
	});

	mainWin.loadFile('index.html').catch(err => console.log(err));
}

app.allowRendererProcessReuse = true;

app.whenReady().then(createWindow);

app.on('activate', () => {
	if (BrowserWindow.getAllWindows().length === 0) {
		createWindow();
	}
})

app.on('ready', ()=>{
	globalShortcut.register('f5', () => {
		mainWin.reload();
	})
})

app.on('will-quit', () => {
	globalShortcut.unregister('f5');
	globalShortcut.unregisterAll();
});

app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') {
		app.quit();
	}
});