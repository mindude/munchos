'use strict';

/**
 * @ngdoc function
 * @name munchApp.controller:ResultCtrl
 * @description
 * # ResultCtrl
 * Controller of the munchApp
 */
angular.module('munchApp')
  .controller('ResultCtrl', function($scope, $http) {
    $scope.request = function() {
      $http.get("http://api.nal.usda.gov/ndb/nutrients/?format=json&api_key=DEMO_KEY&nutrients=205&nutrients=204&nutrients=208&nutrients=269")
        .success(function (data) {
          $scope.datos = data.report.foods;
        })
        .error(function (error) {
          console.log(error);
        });
    };
  });
