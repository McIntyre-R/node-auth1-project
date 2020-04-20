const express = require('express');
const server = express.Router();
const bcrypt = require('bcryptjs');
const users = require('../users/user-model.js')



server.post('/register', (req, res) => {
    let newUser = req.body

    const hash = bcrypt.hashSync( newUser.password, 12)
    newUser.password = hash
    users.registerUser(newUser)
    .then(user => {
        res.status(201).json({user})
    })
})

server.post('/login', (req, res) => {
    
    let {user_name, password} = req.body
    console.log(user_name, password)
    users.findBy({ user_name })
    .then(found => {
        if(found && bcrypt.compareSync(password, found[0].password)) {
            req.session.loggedIn = true;
            res.status(201).json({ message: "Woah dude nice"})
        } else {
            res.status(401).json({ message: "woah dude can't find that info"})
        }
    }) 
    .catch(err => res.status(500).json({error: err}))
})


server.get('/logout', (req,res) => {
    if(req.session) {
        req.session.destroy(err => {
            if(err) {
                res.json({ message: "uh oh"})
            } else {
                res.status(204).end()
            }
        })
    } else {
        res.status(200).json({ message: 'babababa'})
    }
})



module.exports = server
