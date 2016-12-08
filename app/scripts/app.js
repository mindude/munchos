'use strict';

/**
 * @ngdoc overview
 * @name munchApp
 * @description
 * # munchApp
 *
 * Main module of the application.
 */
angular
  .module('munchApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/result', {
        templateUrl: 'views/result.html',
        controller: 'ResultCtrl',
        controllerAs: 'result'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
