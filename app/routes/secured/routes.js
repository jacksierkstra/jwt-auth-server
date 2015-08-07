var jwt    = require('jsonwebtoken'); // used to create, sign, and verify tokens
var User   = require('../../models/user');

var securedRoutes = function(app, apiRoutes) {

  // This is a piece of middleware to protect secured routes
  // to be accessed by people who are not authenticated.
  apiRoutes.use(function(req, res, next) {

    // check header or url parameters or post parameters for token
    var token = req.body.token || req.query.token || req.headers['x-access-token'];

    // decode token
    if (token) {

      // verifies secret and checks exp
      jwt.verify(token, app.get('superSecret'), function(err, decoded) {
        if (err) {
          return res.json({ success: false, message: 'You have supplied an invalid token.' });
        } else {
          // if everything is good, save to request for use in other routes
          req.decoded = decoded;
          next();
        }
      });

    } else {
      return res.status(403).send({
          success: false,
          message: 'No authentication token was found.'
      });
    }

  });

  apiRoutes.get('/users', function(req, res) {
    User.find({}, function(err, users) {
      res.json(users);
    });
  });

};

module.exports = securedRoutes;
