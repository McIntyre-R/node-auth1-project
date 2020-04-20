const express = require('express');

const userRouter = require('./projects/user-router.js');

const server = express();

server.use(express.json());
server.use('/api/users', userRouter);

module.exports = server;