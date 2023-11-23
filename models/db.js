// db.js
const mysql = require('mysql');

// Konfigurasi koneksi database
const db = mysql.createConnection({
    host: 'localhost',
    user: 'xhaeffer',
    password: '#Cobacoba123',
    database: 'game'
});

// Sambungkan ke database
db.connect((err) => {
    if (err) {
        console.error('Koneksi database gagal: ' + err.stack);
        return;
    }
});

module.exports = db;
