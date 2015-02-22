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

  describe('when a user log in', function() {
    it('should create a new entry', function(done) {
      request(app)
        .post('/auth/local')
        .type('form')
        .send({name:'admin', password:'password'})
        .end(function(err, res){
          if (err) return done(err);
          Log.find({}, function(err, users) {
            users.should.have.length(1);
            done();
          });
        });
    });
  });

  describe('with not authenticated user', function(){
    describe('GET /api/log', function() {
      it('should respond with 401', function(done) {
        request(app)
          .get('/api/log')
          .expect(401)
          .end(function(err, res) {
            if (err) return done(err);
            done();
          });
      });
    });
  });

  describe('with admin user logged in', function(){
    describe('and GET /api/log', function() {
      var authToken;

      before(function(done) {
        request(app)
          .post('/auth/local')
          .type('form')
          .send({name:'admin', password:'password'})
          .end(function(err, res){
            authToken = res.body.token;
            if (err) return done(err);
            done();
          });
      });

      it('should respond with JSON array if user authenticated as admin', function(done) {
        request(app)
          .get('/api/log?access_token='+authToken)
          .expect(200)
          .expect('Content-Type', /json/)
          .end(function(err, res) {
            if (err) return done(err);
            res.body.should.be.instanceof(Array);
            done();
          });
      });
    });
  });


  describe('with non admin user logged in', function(){
    describe('and GET /api/log', function() {
      var authToken;

      before(function(done) {
        request(app)
          .post('/auth/local')
          .type('form')
          .send({name:'user', password:'password'})
          .end(function(err, res){
            authToken = res.body.token;
            if (err) return done(err);
            done();
          });
      });

      it('should respond with 403', function(done) {
        request(app)
          .get('/api/log?access_token='+authToken)
          .expect(403)
          .end(function(err, res) {
            if (err) return done(err);
            done();
          });
      });
    });
  });
});
