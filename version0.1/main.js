
const {app, dialog, BrowserWindow} = require('electron');


let buttons = ['Close ', 'Cancel'];
let message = 'Exit ?';
let win;


function createWindow (){


  win = new BrowserWindow({width:1200, height:1200,frame: true})

  win.maximize();

  win.loadURL(`file://${__dirname}/index.html`)

  win.webContents.openDevTools()

  win.on('close', (event) => {

    event.preventDefault();

    dialog.showMessageBox({ type: 'info', buttons: buttons, message: message }, function (response) {

    if(response === 0){

      
       if(process.platform !== 'darwin') {

            app.exit();

        }        
                
    }
    
    });

  });

};


app.on('ready', createWindow)


app.on('activate', () => {

  if(win === null) {
    createWindow()
  }
})

