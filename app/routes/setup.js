var User   = require('../models/user');

var setupRoutes = function(app, apiRoutes) {

  app.get('/setup', function(req, res) {

    User.findOne({ admin : true}, function(err, user) {
      if(user) {
        res.json({ success: false, message: 'Setup has already been executed.' });
      } else {

        var admin = new User({
          email: 'jacksierkstra@gmail.com',
          password: 'test123',
          activated : true,
          activationCode : null,
          admin: true
        });

        admin.save(function(err) {
          if (err) throw err;
          console.log('User saved successfully');
          res.json({ success: true });
        });
      }

    });

  });

  app.get('/reset', function(req, res) {

    User.find().remove(function() {
      res.json({ success: true, message: 'Database has been resetted.' });
    }).exec();

  });

};

module.exports = setupRoutes;
