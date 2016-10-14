'use strict';

/**
 * @ngdoc function
 * @name munchApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the munchApp
 */
angular.module('munchApp')
  .controller('MainCtrl', function ($scope, $html, $routeProvider) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.SaltBtn = function(){
      $location.path( "/result" );
    }
  });
