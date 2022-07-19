const { app, BrowserWindow } = require('electron');

function createWindow() {  // hàm tạo cửa sổ làm việc 
    const win = new BrowserWindow({
        height: 200,
        width: 600,
        webPreferences: {
            nodeIntegration: true,
            enableRemoteModule: true
        },
        frame: false,
        maximizable: false,
        minimizable: false,
        title: 'Update Test',
    });

    win.setTitle('Update Test'); // mấy nữa thêm setIcon 
    win.loadFile('src/html/index.html');  // bản chất vẫn xoay quanh file index.html => Dẫn đến file index rồi nó dẫn tới các file vệ tinh css; js 
}

app.whenReady().then(createWindow); // app ready => tạo cửa sổ

app.on('window-all-closed', () => {  // lắng nghe sự kiện đóng window 
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {  // lắng nghe sự kiện mở window 
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});