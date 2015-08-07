var User   = require('../models/user');
var jwt    = require('jsonwebtoken');
var UserRepository = require('../repositories/userRepository');

var authenticationRoutes = function(app, apiRoutes) {

  var userRepository = new UserRepository();

  apiRoutes.post('/register', function(req, res) {

    var email = req.body.email;
    var password = req.body.password;

    userRepository
          .createAccount(email, password, false)
          .then(
            function(response) {
              res.status(response.statusCode).json(response);
            },
            function(err) {
              res.status(response.statusCode).json(err);
            }
          );


  });

  apiRoutes.get('/activate', function(req, res) {

    var activationCode = req.query.activationCode;

    userRepository.activateAccount(activationCode)
                  .then(
                    function(response) {
                      res.status(response.statusCode).json(response);
                    },
                    function(err) {
                      res.status(response.statusCode).json(err);
                    }
                  );

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
