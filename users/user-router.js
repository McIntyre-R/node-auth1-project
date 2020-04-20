const express = require('express');
const server = express.Router();
const bcrypt = require('bcryptjs');
const users = require('./user-model.js')

server.get('/', (req,res) => {
    users.getUsers()
    .then( users => {
        res.status(200).json({users})
    })
})


server.post('/register', (req, res) => {
    const newUser = req.body

    const hash = bcrypt.hashSync( newUser.password, 12)
    newUser.password = hash
    users.registerUser(newUser)
    .then(user => {
        res.status(201).json({user})
    })
})

// server.post('/login', (req, res) => {
//     const newUser = req.body
//     users.addUser(newUser)
//     .then(user => {
//         res.status(201).json({user})
//     })
// })




module.exports = server


