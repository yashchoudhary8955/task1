const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const { googleClientID, googleClientSecret, googleCallbackURL } = require('./config');

passport.use(new GoogleStrategy({
  clientID: '275183324062-h3iaibe3bkedfmb16vak5btkul81dib8.apps.googleusercontent.com',
  clientSecret: 'YGOCSPX-4PXXvbg-ScLLtbCTkMgV9iu6Bpk6',
  callbackURL: 'http://localhost:3000/auth/google/callback'
}, (accessToken, refreshToken, profile, done) => {
  // Save user profile to the session or database here
  done(null, profile);
}));

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((obj, done) => {
  done(null, obj);
});
