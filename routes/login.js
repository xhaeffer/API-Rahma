const express = require('express');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser'); // Import library cookie-parser
const r = express.Router();
const path = require('path');
const db = require('../models/db');

// Gunakan cookie-parser middleware
r.use(cookieParser());

// Penanganan GET untuk halaman login
r.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'login.html'));
});

// Penanganan POST untuk proses login
r.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Verifikasi login dengan database
  db.query('SELECT * FROM data WHERE username = ? AND password = ?', [username, password], (err, results) => {
    if (err) {
      console.error('Error dalam query: ' + err.message);
      return res.status(500).send('Error dalam query');
    }

    // Jika hasil query mengembalikan pengguna
    if (results.length > 0) {
      const user = results[0];

      // Jika akun memiliki status admin, generate token JWT
      if (user.admin === 1) {
        const token = jwt.sign({ username: user.username, admin: true }, 'secretKey', { expiresIn: '1h' });

        // Simpan token dalam cookie dengan nama 'token'
        res.cookie('token', token, { httpOnly: true });

        // Tampilkan token dalam format JSON
        res.json({
          token,
          username: user.username,
          admin: user.admin,
          expiration: new Date(Date.now() + 60 * 60 * 1000) // 1 hour from now
        });

        // // If the request indicates JSON, respond with JSON
        // const acceptHeader = req.get('Accept');
        // if (acceptHeader && acceptHeader.includes('application/json')) {
        //   res.status(200).json({
        //     token,
        //     username: user.username,
        //     admin: user.admin,
        //     expiration: new Date(Date.now() + 60 * 60 * 1000), // 1 hour from now
        //   });
        // } else {
        //   // Otherwise, respond with HTML
        //   res.redirect('/');
        // }

      } else {
        res.redirect('/');
      }
    } else {
      res.status(401).send('Login gagal. Username atau password tidak valid.');
    }
  });
});

module.exports = r;
