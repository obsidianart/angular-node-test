var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

exports.setup = function (User, config) {
  passport.use(new LocalStrategy({
      usernameField: 'name',
      passwordField: 'password' // this is the virtual field on the model
    },
    function(name, password, done) {
      User.findOne({
        name: name.toLowerCase()
      }, function(err, user) {
        if (err) return done(err);

        if (!user) {
          return done(null, false, { message: 'This username is not registered.' });
        }
        
        return done(null, user);
      });
    }
  ));
};