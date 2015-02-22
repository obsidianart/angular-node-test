'use strict';

var express = require('express');
var controller = require('./log.controller');
var config = require('../../config/environment');
var auth = require('../../auth/auth.service');

var router = express.Router();

router.get('/', auth.isAdmin(), controller.recentList);

module.exports = router;
