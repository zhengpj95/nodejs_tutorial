const {app, BrowserWindow} = require('electron');

function createWindow() {
	// Create the browser window.
	const win = new BrowserWindow({
		height: 650,
		width: 600,
		webPreferences: {
			nodeIntegration: true,
		},
		icon: 'favicon.ico',
		backgroundColor: '#d5d3d3',
		center: true
	});
	// load menu
	require('./src/menu');
	// and load the index.html of the app.
	win.loadFile('index.html')
		.catch(error => console.log(`Error: `, error));
	// win.loadURL('https://gitee.com/zhengpj').then(error => console.log('Error: ', error))

	// Open the DevTools.
	// win.webContents.openDevTools();
}

// The default value of app.allowRendererProcessReuse is deprecated, it is currently "false".
// It will change to be "true" in Electron 9.
app.allowRendererProcessReuse = true;

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', () => {
	// On macOS it is common for applications and their menu bar
	// to stay active until the user quits explicitly with Cmd + Q
	if (process.platform !== 'darwin') {
		app.quit();
	}
});

app.on('activate', () => {
	// On macOS it's common to re-create a window in the app when the
	// dock icon is clicked and there are no other windows open.
	if (BrowserWindow.getAllWindows().length === 0) {
		createWindow();
	}
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
