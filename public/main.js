const { app, BrowserWindow } = require('electron');

function createWindow() {
    const win =  new BrowserWindow({
        width:800,
        height:600,
        webPreferences:{
            nodeIntegration:true,
            
        }
    });
    win.setMenu(null);
    win.loadURL("http://localhost:3069");
    console.log("window created");
}

app.on('ready', createWindow);