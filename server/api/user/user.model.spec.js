'use strict';

var should = require('should');
var app = require('../../app');
var User = require('./user.model');

var user = new User({
  provider: 'local',
  name: 'Fake User',
  password: 'password'
});

describe('User Model', function() {
  it('should begin with 5 users', function(done) {
    User.find({}, function(err, users) {
      users.should.have.length(5);
      done();
    });
  });

  it("should authenticate user if password is valid", function() {
    return user.authenticate('password').should.be.true;
  });

  it("should not authenticate user if password is invalid", function() {
    return user.authenticate('blah').should.not.be.true;
  });
});
