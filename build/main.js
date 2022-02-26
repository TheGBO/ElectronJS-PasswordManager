const { app, BrowserWindow } = require('electron');
const isDev = require('electron-is-dev');
const url = require('url')
const path = require('path');

function createWindow() {
    const win =  new BrowserWindow({
        width:800,
        height:600,
        webPreferences:{
            nodeIntegration:true,
            enableRemoteModule:true
        }
    });

    const prodPath = url.format({
        pathname: path.join(__dirname, '../build/index.html'),
        protocol: 'file:',
        slashes: true
      })

    win.setMenu(null);
    win.loadURL(prodPath);
    console.log("window created");
}

app.on('ready', createWindow);