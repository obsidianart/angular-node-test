'use strict';

angular.module('skyServerApp')
  .controller('MainCtrl', function ($scope, $location) {
  	$scope.login = function() {
  	  $location.path('/welcome');
  	}
  });
