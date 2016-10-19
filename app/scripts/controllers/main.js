'use strict';

/**
 * @ngdoc function
 * @name munchApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the munchApp
 */



angular.module('munchApp')
  .controller('MainCtrl', function ($scope, $location) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.isMultiple = false;
    $scope.isSweetSelected = false;
    $scope.isSaltySelected = false;
    $scope.isBitterSelected = false;
    $scope.isSavorySelected = false;
    $scope.isSourSelected = false;

    $scope.SaltBtn = function(){
      if($scope.isMultiple===false) {
        $location.path('/result');
      }
      else{
        $scope.isSaltySelected  = !$scope.isSaltySelected;
        if($scope.isSaltySelected ===false){
          document.getElementById("TheSaltyButton").className = "btn saltymultiple spacing-top btn-for-flavors";
        }
        else{
          document.getElementById("TheSaltyButton").className = "btn saltymultipleselected spacing-top btn-for-flavors";
        }
      }
    };
    $scope.SourBtn = function(){
      if($scope.isMultiple===false) {
        $location.path('/result');
      }
      else{
        $scope.isSourSelected  = !$scope.isSourSelected;
        if($scope.isSourSelected ===false){
          document.getElementById("TheSourButton").className = "btn sourmultiple spacing-top btn-for-flavors";
        }
        else{
          document.getElementById("TheSourButton").className = "btn sourmultipleselected spacing-top btn-for-flavors";
        }
      }
    };
    $scope.BitterBtn = function(){
      if($scope.isMultiple===false) {
        $location.path('/result');
      }
      else{
        $scope.isBitterSelected  = !$scope.isBitterSelected;
        if($scope.isBitterSelected ===false){
          document.getElementById("TheBitterButton").className = "btn bittermultiple spacing-top btn-for-flavors";
        }
        else{
          document.getElementById("TheBitterButton").className = "btn bittermultipleselected spacing-top btn-for-flavors";
        }
      }
    };
    $scope.SweetBtn = function(){
      if($scope.isMultiple===false) {
        $location.path('/result');
      }
      else{
        $scope.isSweetSelected  = !$scope.isSweetSelected;
        if($scope.isSweetSelected ===false){
          document.getElementById("TheSweetButton").className = "btn sweetmultiple spacing-top btn-for-flavors";
        }
        else{
          document.getElementById("TheSweetButton").className = "btn sweetmultipleselected spacing-top btn-for-flavors";
        }
      }
    };
    $scope.SavoryBtn = function(){
      if($scope.isMultiple===false) {
        $location.path('/result');
      }
      else{
        $scope.isSavorySelected  = !$scope.isSavorySelected;
        if($scope.isSavorySelected ===false){
          document.getElementById("TheSavoryButton").className = "btn savorymultiple spacing-top btn-for-flavors";
        }
        else{
          document.getElementById("TheSavoryButton").className = "btn savorymultipleselected spacing-top btn-for-flavors";
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
        document.getElementById("TheSavoryButton").className = "btn savory spacing-top btn-for-flavors";
        document.getElementById("TheSourButton").className = "btn sour spacing-top btn-for-flavors";
        $scope.isSweetSelected = false;
        $scope.isSaltySelected = false;
        $scope.isBitterSelected = false;
        $scope.isSavorySelected = false;
        $scope.isSourSelected = false;
      }
      else{
        document.getElementById("TheMultipleSelectionButton").className = "btn isMultiple spacing-top btn-for-multipleselections";
        document.getElementById("TheSweetButton").className = "btn sweetmultiple spacing-top btn-for-flavors";
        document.getElementById("TheSaltyButton").className = "btn saltymultiple spacing-top btn-for-flavors";
        document.getElementById("TheBitterButton").className = "btn bittermultiple spacing-top btn-for-flavors";
        document.getElementById("TheSavoryButton").className = "btn savorymultiple spacing-top btn-for-flavors";
        document.getElementById("TheSourButton").className = "btn sourmultiple spacing-top btn-for-flavors";

      }
    };

    $scope.ConfirmBtn = function(){
      $location.path('/result');
    };
  });
