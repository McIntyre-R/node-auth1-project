const express = require('express');
const server = express.Router();
const users = require('./user-model.js')

server.get('/', (req,res) => {
    users.getUsers()
    .then( users => {
        res.status(200).json({users})
    })
})






module.exports = server


