process.env.NODE_ENV !== 'production' && require('dotenv').config()

const express = require('express')
// const path = require('path')
const mongoose = require('mongoose')
const session = require('express-session')
const passport = require('passport')
const LocalStrategy = require('passport-local')
const app = express()
const User = require('./Models/user')
const authRoutes = require('./Routes/authRoutes')
const userRoutes = require('./Routes/userRoutes')
const postRoutes = require('./Routes/postRoutes')
const reviewRoutes = require('./Routes/reviewRoutes')
const adminRoutes = require('./Routes/adminRoutes')
// const { loggedIn } = require('./middleware/app')
// const MongoStore = require('connect-mongo');
const cors = require('cors')

mongoose.connect('mongodb://127.0.0.1:27017/CarpoolingApp')
    .then(() => {
        console.log("Database Connected")
    }).catch(err => {
        console.log('ERROR!!', err)
    })

app.use(session({
    secret: 'my cat likes to jumpscare me',
    name: 'session',
    resave: false,
    saveUninitialized: true,
    // store: MongoStore.create({ mongoUrl: 'mongodb://127.0.0.1:27017/CarpoolingApp' }),
    cookie: {
        httpOnly: true,
        // secure: true,
        expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
        maxAge: 1000 * 60 * 60 * 24 * 7
    }
}))

app.use(express.json())
app.use(passport.initialize())
// app.use(passport.session())
passport.use(new LocalStrategy(User.authenticate()))
require('./Utils/passportJWT')(passport)

// passport.serializeUser(User.serializeUser())
// passport.deserializeUser(User.deserializeUser())

passport.serializeUser(function (user, done) {
    done(null, user);
});

passport.deserializeUser(function (user, done) {
    done(null, user);
});

app.use('/', authRoutes)
app.use('/user', passport.authenticate('jwt', { session: false }), userRoutes)
app.use('/post', passport.authenticate('jwt', { session: false }), postRoutes)
app.use('/review', passport.authenticate('jwt', { session: false }), reviewRoutes)
app.use('/admin', passport.authenticate('jwt', { session: false }), adminRoutes)

app.use((err, req, res, next) => {
    const { statusCode = 500, message = 'Something Went Wrong!' } = err
    res.status(statusCode).send(err.stack)
})

app.listen('777', '192.168.0.100', () => {
    console.log('Listening for requests on port 77777777777777777777777777777777')
})