const db = require('../data/db-config')


module.exports = {
    registerUser,
    getUsers


}



function getUsers(){
    return db('users')
}


function registerUser(user) {
    return db('users')
    .insert(user, 'id')
    .then(user => ({ user}));
}