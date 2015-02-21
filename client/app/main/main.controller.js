'use strict';

angular.module('skyServerApp')
  .controller('MainCtrl', function ($scope, Auth, $location) {
    $scope.user = {};

  	$scope.login = function(form) {
  	  if(form.$valid) {
  	  	Auth.login({
          name: $scope.user.name,
          password: $scope.user.password
        })
        .then( function() {
          // Logged in, redirect to welcome page
          $location.path('/welcome');
        })
      }
  	}

  });
