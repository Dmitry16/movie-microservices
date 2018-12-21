const express = require('express')
const bodyParser = require('body-parser')
const passport = require('passport')
const cors = require('cors')
// const session = require('express-session')

const app = express()

app.use(bodyParser.urlencoded({
    extended: false
}))

// setting up headers for cross domain communication with client 
app.use(cors());
const allowCrossDomain = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.set('Content-Type', 'application/json; charset=utf-8');
  next();
}
app.use(allowCrossDomain);

require('./auth/init');
  
// app.use(session({
// secret: 'secret',
// resave: true,
// saveUninitialized: true
// }))

app.use(passport.initialize())
// app.use(passport.session())

app.get('/', 
    function(req, res) {
        res.send('olala!');
    }
);
app.post('/login', (req, res) => {
    console.log('xxx:::', req.body)
    
    passport.authenticate('local',
        function(err, user, info) {
            console.log('zzz:::', err, user, info)
            // let str = '';
            // req.on("data", (chunk) => {
            //     str += chunk;
            // })
            // req.on('end', () => {
            //     console.log(JSON.parse(str))
            // })
            res.send('req.query');
        }
    )(req, res)
});

app.listen(3001, () => console.log('listening to the port 3001'))

module.exports = app
