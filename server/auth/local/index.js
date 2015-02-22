'use strict';

var express = require('express');
var passport = require('passport');
var auth = require('../auth.service');
var log = require('../../api/log/log.controller.js');

var router = express.Router();

router.post('/', function(req, res, next) {
  passport.authenticate('local', function (err, user, info) {
    var error = err || info;
    
    log.create({
      ip: req.headers['X-Forwarded-For'] || req.connection.remoteAddress,
      success: !!error,
      username: user.name
    })

    if (error) return res.json(401, error);
    if (!user) return res.json(404, {message: 'Something went wrong, please try again.'});

    var token = auth.signToken(user._id, user.role);
    res.json({token: token});
  })(req, res, next)
});

module.exports = router;