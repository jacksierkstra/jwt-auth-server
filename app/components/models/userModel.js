var Q = require('q'),
    mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    bcrypt = require('bcrypt'),
    SALT_WORK_FACTOR = 10;

var UserSchema = new Schema({
    email: String,
    password: String,
    activated : Boolean,
    activationCode : String,
    admin: Boolean
});


// UserSchema.pre('save', function(next) {
//     var user = this;
//
//     // only hash the password if it has been modified (or is new)
//     if (!user.isModified('password')) return next();
//
//     // generate a salt
//     bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
//         if (err) return next(err);
//
//         // hash the password along with our new salt
//         bcrypt.hash(user.password, salt, function(err, hash) {
//             if (err) return next(err);
//
//             // override the cleartext password with the hashed one
//             user.password = hash;
//             next();
//         });
//     });
// });
//
// UserSchema.methods.comparePassword = function(candidatePassword, cb) {
//     bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
//         if (err) return cb(err);
//         cb(null, isMatch);
//     });
// };
//
// // set up a mongoose model and pass it using module.exports
// module.exports = mongoose.model('User', UserSchema);

exports = module.exports = function(logger) {
  var userModel = new UserModel();
  return userModel;
};

exports['@require'] = ['logger'];


function UserModel() {
  this.model = mongoose.model('UserModel', UserSchema);
}

UserModel.prototype.find = function(query) {

  var deferred = Q.defer();
  
  this.model.findOne(query, function(err, user) {
    if (err) {
    	deferred.reject(new Error(err));
    } else {
    	deferred.resolve(user);
    }
  });

  return deferred.promise;

}
