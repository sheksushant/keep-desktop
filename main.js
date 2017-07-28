const {app, BrowserWindow} = require('electron');

let mainWindow;

app.on('window-all-closed', function() {
  app.quit();
});

app.on('ready', function() {
  // Change the Width and Height here aaccording to the resolution of your screen..
  mainWindow = new BrowserWindow({width: 1050, height: 810 });
  mainWindow.loadURL('file://' + __dirname + '/keep.html');
});
