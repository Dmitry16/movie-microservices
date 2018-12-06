const express = require('express')
const bodyParser = require('body-parser')
const passport = require('passport')
// const session = require('express-session')

const app = express()

app.use(bodyParser.urlencoded({
    extended: false
  }))

require('./auth/init');
  
// app.use(session({
// secret: 'secret',
// resave: true,
// saveUninitialized: true
// }))

app.use(passport.initialize())
// app.use(passport.session())

app.get('/login', 
    // passport.authenticate('local', { session: false }),
    function(req, res) {
        console.log('zzzz', req)
        res.send(({ username: req }));
    }
);

app.listen(3001, () => console.log('listening to the port 3001'))

module.exports = app
