/**
 * Main application routes
 */

'use strict';

var errors = require('./components/errors');

module.exports = function(app) {
  // Insert routes below
  app.use('/api/log', require('./api/log'));

  app.use('/auth', require('./auth'));

  app.route('/*')
    .get(function(req, res) {
      res.sendfile(app.get('appPath') + '/index.html');
    });
};
