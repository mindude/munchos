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
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/healthy', {
        templateUrl: 'views/healthy.html',
        controller: 'HealthyCtrl',
        controllerAs: 'healthy'
      })
      .when('/result', {
        templateUrl: 'views/result.html',
        controller: 'ResultCtrl',
        controllerAs: 'result'
      })
      .when('/test', {
        templateUrl: 'views/test.html',
        controller: 'TestCtrl',
        controllerAs: 'test'
      })
      .when('/GPSView', {
        templateUrl: 'views/gpsview.html',
        controller: 'GpsviewCtrl',
        controllerAs: 'GPSView'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
