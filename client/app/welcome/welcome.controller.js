'use strict';

angular.module('skyServerApp')
  .controller('WelcomeCtrl', function ($scope, $location, $cookieStore, Auth) {
  	$scope.isAdmin = Auth.isAdmin;
  	$scope.token  = $cookieStore.get('token');

    $scope.logout = function() {
      Auth.logout();
      $location.path('/');
    };
  });
