'use strict';

/**
 * @ngdoc function
 * @name munchApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the munchApp
 */



angular.module('munchApp')
  .controller('MainCtrl', function ($scope, $location, $http) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.isMultiple = false;
    $scope.isSweetSelected = 0;
    $scope.isSaltySelected = 0;
    $scope.isBitterSelected = 0;
    $scope.isSourSelected = 0;

    $scope.SaltBtn = function(){
      if($scope.isMultiple===false) {
        $scope.isSaltySelected = 1;
        $location.path('/result');
      }
      else{

        if($scope.isSaltySelected ===0){
          $scope.isSaltySelected = 1;
          document.getElementById("TheSaltyButton").className = "btn saltymultipleselected spacing-top btn-for-flavors";
        }
        else{
          $scope.isSaltySelected = 0;
          document.getElementById("TheSaltyButton").className = "btn saltymultiple spacing-top btn-for-flavors";
        }
      }
    };
    $scope.SourBtn = function(){
      if($scope.isMultiple===false) {
        $scope.isSourSelected = 1;
        $location.path('/result');
      }
      else{
        if($scope.isSourSelected ===0){
          $scope.isSourSelected = 1;
          document.getElementById("TheSourButton").className = "btn sourmultipleselected spacing-top btn-for-flavors";
        }
        else{
          $scope.isSourSelected = 0;
          document.getElementById("TheSourButton").className = "btn sourmultiple spacing-top btn-for-flavors";
        }
      }
    };
    $scope.BitterBtn = function(){
      if($scope.isMultiple===false) {
        $scope.isBitterSelected = 1;
        $location.path('/result');
      }
      else{
        if($scope.isBitterSelected ===0){
          $scope.isBitterSelected = 1;
          document.getElementById("TheBitterButton").className = "btn bittermultipleselected spacing-top btn-for-flavors";
        }
        else{
          $scope.isBitterSelected = 0;
          document.getElementById("TheBitterButton").className = "btn bittermultiple spacing-top btn-for-flavors";
        }
      }
    };
    $scope.SweetBtn = function(){
      if($scope.isMultiple===false) {
        $scope.isSweetSelected = 1;
        $location.path('/result');
      }
      else{
        if($scope.isSweetSelected ===0){
          $scope.isSweetSelected = 1;
          document.getElementById("TheSweetButton").className = "btn sweetmultipleselected spacing-top btn-for-flavors";
        }
        else{
          $scope.isSweetSelected = 0;
          document.getElementById("TheSweetButton").className = "btn sweetmultiple spacing-top btn-for-flavors";
        }
      }
    };
    $scope.MultipleSelectionBtn = function(){
      $scope.isMultiple = !$scope.isMultiple;
      if($scope.isMultiple===false) {
        document.getElementById("TheMultipleSelectionButton").className = "btn notMultiple spacing-top btn-for-multipleselections";
        document.getElementById("TheSweetButton").className = "btn sweet spacing-top btn-for-flavors";
        document.getElementById("TheSaltyButton").className = "btn salty spacing-top btn-for-flavors";
        document.getElementById("TheBitterButton").className = "btn bitter spacing-top btn-for-flavors";
        document.getElementById("TheSourButton").className = "btn sour spacing-top btn-for-flavors";
        $scope.isSweetSelected = 0;
        $scope.isSaltySelected = 0;
        $scope.isBitterSelected = 0;
        $scope.isSourSelected = 0;
      }
      else{
        document.getElementById("TheMultipleSelectionButton").className = "btn isMultiple spacing-top btn-for-multipleselections";
        document.getElementById("TheSweetButton").className = "btn sweetmultiple spacing-top btn-for-flavors";
        document.getElementById("TheSaltyButton").className = "btn saltymultiple spacing-top btn-for-flavors";
        document.getElementById("TheBitterButton").className = "btn bittermultiple spacing-top btn-for-flavors";
        document.getElementById("TheSourButton").className = "btn sourmultiple spacing-top btn-for-flavors";

      }
    };

    $scope.ConfirmBtn = function(){
      var params = {
        bitter: $scope.isBitterSelected,
        salty: $scope.isSaltySelected,
        sweet: $scope.isSweetSelected,
        sour: $scope.isSourSelected
      };
      localStorage.setItem('params', JSON.stringify(params));
      $location.path('/result');



    };
  });
