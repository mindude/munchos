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

      $http.put('https://zi31az7mdh.execute-api.us-east-1.amazonaws.com/dev/connectToRecipesAPI', params)
        .success(function (data) {
          $scope.recipe = data.recipes[0];
          var params2={
            id: data.recipes[0].recipe_id
          };

          $http.put('https://zi31az7mdh.execute-api.us-east-1.amazonaws.com/dev/retrieveIngredientsAPI', params2 )
            .success(function (data2){
              $scope.ingredients = data2.recipes;
          })
          .error(function (error) {
            console.log(error);
          });

        })
        .error(function (error) {
          console.log(error);
        });
    };
  });
