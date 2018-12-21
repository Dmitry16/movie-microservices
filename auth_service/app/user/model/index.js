const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

mongoose.connect('mongodb://localhost/users', { useNewUrlParser: true })

const db = mongoose.connection

const UserSchema = mongoose.Schema({
    name: {
        type: String,
        // index: true,
        // unique: true,
        required: true
    },
    pw: {
        type: String,
        required: true
    }
})

const User = module.exports = mongoose.model('User', UserSchema)

module.exports.createUser = function(newUser, cb){ 

    bcrypt.genSalt(10, function(err, salt){
        if (err) throw err
        bcrypt.hash(newUser.password, salt, function(err, hash){
            newUser.password = hash
        })
        newUser.save(cb)
    })
}
module.exports.getUser = function(username, cb) {
    console.log('zzzzzzz')
    const query = {"name": username}
    User.findOne(query, cb)
}
