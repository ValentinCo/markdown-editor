
const {app, dialog, ipcMain, BrowserWindow} = require('electron');

let win;

  

function createWindow (){



  win = new BrowserWindow({width:1200, height:1200,frame: true})

  win.maximize();

  win.loadURL(`file://${__dirname}/index.html`)

  win.webContents.openDevTools()

  win.on('close', (event) => {
    win = null;
  });

  global.app = app.exit

};



app.on('ready', createWindow)


app.on('activate', () => {

  if(win === null) {
    createWindow()
  }
})

