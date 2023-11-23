const express = require('express');
const r = express.Router();
const path = require('path');
const db = require('../models/db');

r.get('/register', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'register.html'));
});

r.post('/register', (req, res) => {
  const { username, email, password } = req.body;

  // Validasi dasar (Anda mungkin ingin menambahkan validasi lebih lanjut)
  if (!username || !email || !password) {
      return res.status(400).send('Username, email, dan password dibutuhkan');
  }

  // Periksa apakah username atau email sudah ada dalam database
  db.query('SELECT * FROM data WHERE username = ? OR email = ?', [username, email], (err, results) => {
      if (err) {
          console.error('Error dalam query: ' + err.message);
          return res.status(500).send('Error dalam query');
      }

      // Jika username atau email sudah digunakan, beri respons
      if (results.length > 0) {
          return res.status(400).send('Username atau email sudah digunakan');
      }

      // Jika username dan email belum digunakan, tambahkan pengguna baru ke database
      db.query('INSERT INTO data (username, email, password, admin) VALUES (?, ?, ?, ?)', [username, email, password, "0"], (err, results) => {
          if (err) {
              console.error('Error dalam query: ' + err.message);
              return res.status(500).send('Error dalam query');
          }

          // Redirect atau berikan respons sesuai kebutuhan
        res.redirect('/login'); // Anda bisa mengarahkan ke halaman login atau halaman lainnya
        //   console.log({ requestFromOutside: req.body });
        //   res.send('SignUp berhasil');
      });
  });
});

module.exports = r;

