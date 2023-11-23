const express = require('express');
const path = require('path');
const jwt = require('jsonwebtoken'); // Import library jsonwebtoken
const db = require('../models/db');

const router = express.Router();

// Middleware untuk verifikasi token
function verifyToken(req, res, next) {
  const token = req.cookies.token;
  if (!token) return res.status(401).send('Akses ditolak');
  jwt.verify(token, 'secretKey', (err, user) => {
    if (err) {
      return res.status(403).send('Token tidak valid');
    }
    req.user = user;
    next();
  });
}

// Endpoint untuk mendapatkan data berdasarkan username dengan token JWT
router.get('/:username', verifyToken, (req, res) => {
  const username = req.params.username;

  // Periksa apakah username ada dalam database
  db.query('SELECT * FROM data WHERE username = ?', [username], (err, results) => {
    if (err) {
      console.error('Error dalam query: ' + err.message);
      return res.status(500).send('Error dalam query');
    }

    // Jika username tidak ditemukan, beri respons
    if (results.length === 0) {
      return res.status(404).send('Username tidak ditemukan');
    }

    // Kirim data pengguna sebagai respons
    const user = results[0];
    res.json({
      username: user.username,
      email: user.email,
      skor1: user.skor1,
      skor2: user.skor2,
      skor3: user.skor3,
    });
  });
});

module.exports = router;
