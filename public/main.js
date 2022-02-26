const { app, BrowserWindow } = require('electron');
const isDev = require('electron-is-dev');

function createWindow() {
    const win =  new BrowserWindow({
        width:800,
        height:600,
        webPreferences:{
            nodeIntegration:true,
            enableRemoteModule:true
        }
    });
    win.setMenu(null);
    win.loadURL(isDev ? "http://localhost:3069" : "../build/index.html");
    console.log("window created");
}

app.on('ready', createWindow);