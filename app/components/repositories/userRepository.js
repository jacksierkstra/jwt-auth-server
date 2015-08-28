// var User = require('../models/user');
// var Q = require('q');
//
// function UserRepository() {
//   this.findById = findById;
//   // this.findByEmail = findByEmail;
//   // this.findByActivationCode = findByActivationCode;
//   // this.activateAccount = activateAccount;
//   // this.createAccount = createAccount;
//   // this.resetPassword = resetPassword;
// }
//
// function findById(id) {
// 	var deferred = Q.defer();
// 	var query = {
// 		_id: id
// 	};
// 	User.findOne(query, function(err, user) {
// 		if (err) {
// 			deferred.reject(new Error(err));
// 		}
// 		else {
// 			deferred.resolve(user);
// 		}
// 	});
// 	return deferred.promise;
// }

// function findByEmail(email) {
//   var deferred = Q.defer();
//   var query = {
//     email: email
//   };
//   User.findOne(query, function(err, user) {
//     if (err) {
//       deferred.reject(new Error(err));
//     }
//     else {
//       deferred.resolve(user);
//     }
//   });
//   return deferred.promise;
// }

// function findByActivationCode(activationCode) {
//   var deferred = Q.defer();
//   var query = {
//     activationCode: activationCode
//   };
//   User.findOne(query, function(err, user) {
//     if (err) {
//       deferred.reject(new Error(err));
//     }
//     else {
//       deferred.resolve(user);
//     }
//   });
//   return deferred.promise;
// }

// function createAccount(email, password, isAdmin) {
//
//   var deferred = Q.defer();
//
//   var userFound = function(user){
//
//     if( ! user ) {
//
//         var newUser = new User({
//            email: email,
//            password: password,
//            activated : false,
//            activationCode : randomString.generate(32),
//            admin: isAdmin
//          });
//
//          newUser.save(function(err) {
//            if (err) {
//              deferred.reject(new Error(err));
//            } else {
//              deferred.resolve({ success: true, statusCode : 200, message : 'An activation e-mail has been send to: ' + email + '.'});
//            }
//          });
//
//     } else {
//         if( ! user.activated ) {
//             deferred.reject({ success: false, statusCode : 401, message: 'A user with this e-mail already exists, but hasn\'t been activated. Please check your e-mail.' });
//         } else {
//             deferred.reject({ success: false, statusCode : 401, message: 'A user with this e-mail already exists.' });
//         }
//     }
//
//   };
//
//   var userNotFound = function(err){
//     deferred.reject(err);
//   };
//
//   this.findByEmail(email)
//       .then(
//           userFound,
//           userNotFound
//       );
//
//   return deferred.promise;
//
// }

// function activateAccount(activationCode) {
//
//   var deferred = Q.defer();
//
//   var userFound = function(user){
//
//      user.activationCode = null;
//      user.activated = true;
//
//      user.save(function(err) {
//         if( ! err ) {
//           deferred.resolve({success: true, statusCode : 200, message : 'You successfully activated your account.'});
//         } else {
//           deferred.reject({success: false, statusCode : 500, message : 'Something went wrong activating your account.'});
//         }
//      });
//
//   };
//
//   var userNotFound = function(err) {
//     deferred.reject({success: false, statusCode : 401, message : 'Either you already activated your account or you supplied an invalid activation code.'});
//   };
//
//   this.findByActivationCode(activationCode)
//       .then(
//         userFound,
//         userNotFound
//       );
//
//   return deferred.promise;
//
// }

// function resetPassword() {
//   var deferred = Q.defer();
// }

// module.exports = UserRepository;

exports = module.exports = function(userModel) {
  var userRepository = new UserRepository(userModel);
  return userRepository;
};

exports['@require'] = ['models/userModel'];


function UserRepository(userModel) {
  this.userModel = userModel;
}

UserRepository.prototype.findById = function(id) {

  return this.userModel.find({ _id : id })
  .then(function(){
    console.log('niet faal');
    return "niet faal";
  })
  .fail(function(){
    console.log('faal');
    return "faal";
  });

};
