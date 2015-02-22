'use strict';

var Log = require('./log.model');
var config = require('../../config/environment');
var NUMBER_OF_ENTRIES_TO_RETRIEVE = 50

/**
 * New entry
 * @param {Object} {ip:String, success:Boolean, username: String}
 * @return promise
 */
exports.create = function(data) {
  var logData = {
    ip: data.ip,
    action: data.success ? 'AUTH_SUCCESS' : 'AUTH_FAILURE',
    usename: data.username
  };

  return Log.create(logData, function(err, log) {
    if(err) { console.log(err); return err; }
    return true;
  });
};