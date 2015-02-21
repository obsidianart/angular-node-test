'use strict';

angular.module('skyServerApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('welcome', {
        url: '/welcome',
        templateUrl: 'app/welcome/welcome.html',
        controller: 'WelcomeCtrl'
      });
  });