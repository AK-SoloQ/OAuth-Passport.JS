const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./keys');
const Admin = require('../models/admin')

passport.use(
    new GoogleStrategy({
        // options for google strategy
        clientID: keys.google.clientID,
        clientSecret: keys.google.clientSecret,
        callbackURL: '/auth/google/redirect'
    }, (accessToken, refreshToken, profile, done) => {
        // passport callback function
        // console.log('passport callback function fired:');
        // console.log(profile);
        new Admin({
            googleId: profile.id,
            username : profile.displayName
        }).save().then(newUser => {
            console.log({newUser})
        })
            
            
    })
);
