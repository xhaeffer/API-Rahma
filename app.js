const express = require('express');
const path = require('path');
const app = express();
const port = 4000;

const index = require('./routes/index');
const login = require('./routes/login');
const register = require('./routes/register');
const userdata = require('./routes/userdata');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/', login);
app.use('/', register);
app.use('/userdata', userdata);

app.listen(port, () => {
  console.log(`Berjalan di port ${port}`);
});