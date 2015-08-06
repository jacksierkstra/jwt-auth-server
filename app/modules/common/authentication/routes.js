var User   = require('./models/user');
var jwt    = require('jsonwebtoken');
var randomString = require("randomstring");

var authenticationRoutes = function(app, apiRoutes) {

  apiRoutes.post('/register', function(req, res) {

    User.findOne({ email :req.body.email }, function(err, user){

        // Do some activation and existence checks.
        if(user) {
          if( user.activated ) {
            return res.json({ success: false, message: 'A user with this e-mail already exists.' });
          } else {
            return res.json({ success: false, message: 'A user with this e-mail already exists, but hasn\'t been activated. Please check your e-mail.' });
          }
        }

        var newUser = new User({
          email: req.body.email,
          password: req.body.password,
          activated : false,
          activationCode : randomString.generate(32),
          admin: false
        });

        newUser.save(function(err) {
          if (err) throw err;
          return res.json({ success: true, message : 'An activation e-mail has been send to: ' + req.body.email + '.'});
        });

    });

  });

  apiRoutes.get('/activate', function(req, res) {

    User.findOne({ activationCode :req.query.activationCode }, function(err, user){

        if( user ) {

           user.activationCode = null;
           user.activated = true;

           user.save(function(err) {
              if(err) throw err;
              return res.json({success: true, message : 'You successfully activated your account.'});
           });

        } else {
          return res.json({success: false, message : 'Either you already activated your account or you supplied an invalid activation code.'});
        }

    });

  });

  apiRoutes.post('/authenticate', function(req, res) {

    // find the user
    User.findOne({
      email: req.body.email
    }, function(err, user) {

      if (err) throw err;

      if (!user) {
        res.json({ success: false, message: 'Authentication failed. User not found.' });
      } else if (user) {
        console.log(user);

        user.comparePassword(req.body.password, function(err, isMatch) {

            if ( ! isMatch ) return res.json({ success: false, message: 'Authentication failed. Wrong password.' });

            // if user is found and password is right create a token
            var token = jwt.sign(user, app.get('superSecret'), {
              expiresInMinutes: 1440 // expires in 24 hours
            });

            res.json({
              success: true,
              message: 'Use this token wisely!',
              token: token
            });

        });

      }

    });
  });




};

module.exports = authenticationRoutes;
