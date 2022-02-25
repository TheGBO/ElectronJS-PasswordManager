const { app, BrowserWindow } = require('electron');

function createWindow() {
    const win =  new BrowserWindow({
        width:800,
        height:600,
        webPreferences:{}
    });
    win.setMenu(null);
    win.loadURL("http://localhost:3000");
}

app.on('ready', createWindow);