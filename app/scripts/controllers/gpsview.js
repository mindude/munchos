'use strict';

/**
 * @ngdoc function
 * @name munchApp.controller:GpsviewCtrl
 * @description
 * # GpsviewCtrl
 * Controller of the munchApp
 */
angular.module('munchApp')
  .controller('GpsviewCtrl', function ($scope, $http) {
    $scope.request = function() {
      var params={
        search: 'ice cream'
      };

      $http.put('https://ts4xmfum6f.execute-api.us-east-1.amazonaws.com/dev/connectToRecipesAPI', params)
        .success(function (data) {
          $scope.recipe = data.recipes;
        })
        .error(function (error) {
          console.log(error);
        });
    };
  });
