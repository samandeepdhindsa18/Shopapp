const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');
const mongoose = require('mongoose');
//create model class
const User = mongoose.model('users');

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback',
      proxy: true,
    }, //callback function
    async (accessToken, refreshToken, profile, done) => {
      const existingUser = await User.findOne({ googleId: profile.id });
      if (existingUser) {
        //tell passport that it is all clear
        done(null, existingUser);
        return existingUser;
      }
      //create new instance
      console.log('I am in else statement');
      const user = await new User({ googleId: profile.id }).save();
      done(null, user);
    }
  )
);
passport.serializeUser((user, done) => {
  console.log('i am in serialize part');
  done(null, user.id);
});
passport.deserializeUser((id, done) => {
  User.findById(id).then((user) => {
    done(null, user);
  });
});
