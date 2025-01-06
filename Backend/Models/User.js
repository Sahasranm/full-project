const db = require('mongoose')
const user = db.Schema({
    name:String,
    email:String,
    password:String
})
const User = db.model('User',user);
module.exports = User;