var should = require('should'),
    assert = require('assert'),
    request = require('supertest');

var UserRepository = require('./../../app/components/repositories/userRepository');

describe('userRepository', function() {

  var userRepository = new UserRepository();

  it('Should return the user and not reject the promise.',
  function(done) {
    done();
  });

  it('Should return an error message when a user already exists with that e-mail address.',
  function(done) {

  done();
  });

  it('Should return an error message when a user already exists but hasn\'t registered.',
  function(done) {

  done();
  });

});
