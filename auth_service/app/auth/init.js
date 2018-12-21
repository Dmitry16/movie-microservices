const passport = require('passport')
const bcrypt = require('bcrypt')
const LocalStrategy = require('passport-local').Strategy

const getUser = require('../user/model')
// const user = {
//     username: 'test-user',
//     passwordHash: 'bcrypt-hashed-password',
//     id: 1
// }

passport.use(new LocalStrategy(
    {
        usernameField: 'name',
        passwordField: 'surname'
    },
    (username, password, done) => {
        console.log('djhfgjfhg')
        getUser({"name": username}, (err, user) => {

            console.log('getUser:::', user)

            if (err) throw err
            if (!user) {
                return done(null, false)
            }
            // Always use hashed passwords and fixed time comparison
            // bcrypt.compare('zz', 'zz', (err, isValid) => {
                
            //     console.log('getUser:::', user)
                
            //     if (err) {
            //         return done(err)
            //     }
            //     if (!isValid) {
            //         return done(null, false)
            //     }
            if (user.pw === password)
                return done(null, user) 
            // })
        })
    }
))
