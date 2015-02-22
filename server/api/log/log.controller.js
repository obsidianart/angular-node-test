'use strict';

var Log = require('./log.model');
var config = require('../../config/environment');
var NUMBER_OF_ENTRIES_TO_RETRIEVE = 50

/**
 * Get most recent access
 */
exports.recentList = function (req, res) {
  Log.find().sort({ $natural: -1 }).limit(NUMBER_OF_ENTRIES_TO_RETRIEVE).exec(function (err, logs) {
    if(err) { return res.send(500, err); }
    return res.json(200, logs);
  });
};

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
    if(err) { console.log("Error logging user: ",err); return err; }
    return true;
  });
};