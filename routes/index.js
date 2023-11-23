const express = require('express');
const r = express.Router();
const path = require('path');
//const db = require('../models/db');

r.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public', 'login.html'));
});

module.exports = r;