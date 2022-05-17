/** @format */

const express = require('express');
const cors = require('cors');
const cookieSession = require('cookie-session');
const passport = require('passport');

const app = express();

app.use(cors({
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
}));
app.use(express.json());
app.use(
  cookieSession({
    name: 'session',
    keys: ['lama'],
    maxAge: 24 * 60 * 60 * 1000,
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
