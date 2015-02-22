'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var LogSchema = new Schema({
  ip: String, //The ip can be save as number to save space
  datetime: { type : Date, default: Date.now },
  action: { type: String, enum: ['AUTH_SUCCESS', 'AUTH_FAILURE'] },
  username: String
});

module.exports = mongoose.model('Log', LogSchema);
