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
      $http.get("http://food2fork.com/api/search?key=eabca0bf48175c869c837effc69b5c77&q=shredded%20chicken")
        .success(function (data) {
          $scope.recipes = data.recipes;
        })
        .error(function (error) {
          console.log(error);
        });
    };
  });
