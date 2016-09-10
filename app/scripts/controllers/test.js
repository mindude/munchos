'use strict';

/**
 * @ngdoc function
 * @name munchApp.controller:TestCtrl
 * @description
 * # TestCtrl
 * Controller of the munchApp
 */
angular.module('munchApp')
  .controller('TestCtrl', function ($scope, $http) {
    $scope.TestBtn = function(){
      $http.get("http://api.nal.usda.gov/ndb/nutrients/?format=json&api_key=DEMO_KEY&nutrients=205&nutrients=204&nutrients=208&nutrients=269")
        .success(function(data){
          $scope.datos = data;
        })
        .error(function(error){
          console.log(error);
        });
    };
  });
