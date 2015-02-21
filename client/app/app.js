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
  });