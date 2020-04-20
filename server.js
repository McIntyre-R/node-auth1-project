const express = require('express');
const cors = require("cors");
const userRouter = require('./users/user-router.js');
const authRouter = require('./auth/auth-router.js')
const session = require("express-session")
const authenticator = require('./auth/authenticator.js')

const server = express();

const sessionConfig = {
    name:'owo',
    secret: process.env.SESSION_SECRET || 'hewwo notices secwet',
    resave: false,
    saveUninitialized: process.env.SEND_COOKIES || true,
    cookie: {
      maxAge: 1000 * 60 * 10, //good for ten mins in ms
      secure: process.env.USE_SECUR_COOKIES || false, // used over https only, set to true in production
      httpsOnly: true // true means JS on the client cannot access the cookie
    }
  };

server.use(express.json());
server.use(cors());
server.use(session(sessionConfig));
server.use('/api/users', authenticator, userRouter);
server.use('/api/auth', authRouter);
module.exports = server;