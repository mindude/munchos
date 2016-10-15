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
    $scope.SaltBtn = function(){
      //$location.path('/result');
    }
    $scope.SourBtn = function(){
      //$location.path('/result');
    }
    $scope.BitterBtn = function(){
      //$location.path('/result');
    }
    $scope.SweetBtn = function(){
      //$location.path('/result');
    }
    $scope.SpicyBtn = function(){
      //$location.path('/result');
    }
  });
