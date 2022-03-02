const passport = require('passport');
const Strategy = require('passport-google-oauth').OAuth2Strategy;
const User = require('./models/User');

function setupGoogle({ ROOT_URL, server }) {

        // 1. define `verify` method: get profile and googleToken from Google

  const verify = async (accessToken, refreshToken, profile, verified) => {
    let email;
    let avatarUrl;

    if (profile.emails) {
      email = profile.emails[0].value;
    }

    if (profile.photos && profile.photos.length > 0) {
      avatarUrl = profile.photos[0].value.replace('sz=50', 'sz=128');
    }
    // 2. call and wait for static method `User.signInOrSignUp` to return created or existing user 

    try {
      const user = await User.signInOrSignUp({
        googleId: profile.id,
        email,
        googleToken: { accessToken, refreshToken },
        displayName: profile.displayName,
        avatarUrl,
      });
      verified(null, user);
    } catch (err) {
      verified(err);
      console.log(err);
    }
  };
  passport.use(new Strategy(
    {
      clientID: process.env.GOOGLE_CLIENTID,
      clientSecret: process.env.GOOGLE_CLIENTSECRET,
      callbackURL: `${ROOT_URL}/oauth2callback`,
    },
    verify,
  ));

  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
    User.findById(id, User.publicFields(), (err, user) => {
      done(err, user);
    });
  });

  server.use(passport.initialize());
  server.use(passport.session());

  // 5. Express routes

   server.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email'],
      prompt: 'select_account',
    }),
  );

  server.get(
    '/oauth2callback',
    passport.authenticate('google', {
      failureRedirect: '/login',
    }),
    (_, res) => {
      res.redirect('/');
    },
  );

  server.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/login');
  });


  




}

module.exports = setupGoogle;

// from profile we are getting the below 
//  - `googleId` (`profile.id`)
//  - `email` (`profile.emails[0].value`)
//  - `displayName` (`profile.displayName`)
//  - `avatarUrl` (`profile.image.url`)