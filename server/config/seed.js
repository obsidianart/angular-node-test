/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var User = require('../api/user/user.model');

User.find({}).remove(function() {
  User.create({
    provider: 'local',
    name: 'user',
    password: 'password'
  },{
    provider: 'local',
    name: 'manager',
    password: 'password'
  },{
    provider: 'local',
    name: 'admin',
    password: 'password'
  },{
    provider: 'local',
    name: 'developer',
    password: 'password'
  },{
    provider: 'local',
    name: 'tester',
    password: 'password'
  }, function() {
      console.log('finished populating users');
    }
  );
});