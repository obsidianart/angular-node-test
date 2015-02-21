'use strict';

angular.module('skyServerApp')
  .controller('WelcomeCtrl', function ($scope, $location, Auth) {
    $scope.logout = function() {
      Auth.logout();
      $location.path('/');
    };
  });
