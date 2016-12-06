'use strict';

/**
 * @ngdoc function
 * @name munchApp.controller:ResultCtrl
 * @description
 * # ResultCtrl
 * Controller of the munchApp
 */
angular.module('munchApp')
  .controller('ResultCtrl', function($scope, $http, $location) {
    if (!localStorage['params']){
      $location.path('/main');
    }
    $scope.request = function() {
      $http.get("http://api.nal.usda.gov/ndb/nutrients/?format=json&api_key=DEMO_KEY&nutrients=205&nutrients=204&nutrients=208&nutrients=269")
        .success(function (data) {
          $scope.datos = data.report.foods;
        })
        .error(function (error) {
          console.log(error);
        });
    };
    var resultNumber = 6;
    var results = localStorage['params'];
    var recipeNames = [];
    var ingredients = [];
    var imageURL = [];
    var sourceURL = [];
    var params = JSON.parse(results);
    $http({
      method: 'POST',
      url: 'https://4md5n45sf8.execute-api.us-east-1.amazonaws.com/dev/searchFoodFlavor',
      data: params
    }).success(function (data) {
      for (var i = 0; i<resultNumber;i++ ){
        var stringName = "";
        for (var e = 0; e < data[i].name.length; e++) {
          if (data[i].name.charAt(e) == ",") {
            break;
          }
          stringName += data[i].name.charAt(e);
        }
        var searchName = {
          search: stringName
        };
        recipeNames.push(stringName);
        $scope.recipename = recipeNames;
        $http.put('https://zi31az7mdh.execute-api.us-east-1.amazonaws.com/dev/connectToRecipesAPI', searchName)
          .success(function (data1) {
            if(data1.recipes.length != 0){
              var params2={
                id: data1.recipes[0].recipe_id
              };
              imageURL.push(data1.recipes[0].image_url);
              sourceURL.push(data1.recipes[0].source_url);
              $scope.imageurl = imageURL;
              $scope.sourceurl = sourceURL;
              $http.put('https://zi31az7mdh.execute-api.us-east-1.amazonaws.com/dev/retrieveIngredientsAPI', params2 )
                .success(function (data2){
                  ingredients.push(data2.recipes);
                  $scope.ingredient = ingredients;
                })
                .error(function (error) {
                  console.log(error);
                });
            }
            else{
              imageURL.push("Image Unavailable");
              sourceURL.push("No source found");
              ingredients.push("No recipes found for this");
            }
          })
          .error(function (error) {
            console.log(error);
          });

      }
    }).error(function (data) {
      console.log(data);
    });
  });
