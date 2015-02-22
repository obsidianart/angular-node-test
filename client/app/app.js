'use strict';

angular.module('skyServerApp', [
  'ngResource',
  'ngCookies',
  'ngSanitize',
  'ui.router'
])
  .config(function ($urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/');

    $locationProvider.html5Mode(true);
  })

  .run(function ($rootScope, $location, Auth) {
    // Redirect to login if route requires auth and you're not logged in
    $rootScope.$on('$stateChangeStart', function (event, next) {
      Auth.isLoggedInAsync(function(loggedIn) {
        if (next.authenticate && !loggedIn) {
          $location.path('/');
        }
      });
    });
  });