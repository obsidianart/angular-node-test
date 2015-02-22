'use strict';

var should = require('should');
var app = require('../../app');
var Log = require('./log.model');
var request = require('supertest');

var log = new Log({
  IP: "201.109.20.1",
  Action: 'AUTH_SUCCESS',
  Username: "Test"
});

var createEntry = function() {
  return Log.create({
    ip: '201.213.167.098',
    success: true,
    username: 'fake user'
  })
}

describe('Log', function() {
  before(function(done) {
    // Clear logs before testing
    Log.remove().exec().then(function() {
      done();
    });
    done();
  });

  afterEach(function(done) {
    Log.remove().exec().then(function() {
      done();
    });
    done();
  });

  it('should create a new entry', function(done) {
    createEntry().then(function(){
      Log.find({}, function(err, users) {
        users.should.have.length(1);
        done();
      });
    })
  });
});
