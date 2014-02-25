/* global window */
(function (angular) {
  'use strict';
  var app = angular.module('app', ['ngRoute']);
  app.config([
    '$routeProvider',
    function ($routeProvider) {
      $routeProvider.when('/home', {
        templateUrl: 'app/partials/main.html',
        controller: 'MainCtrl'
      });
      $routeProvider.otherwise({ redirectTo: '/home' });
    }
  ]);
  app.controller('MainCtrl', [
    '$scope',
    function ($scope) {
    }
  ]);
}(window.angular));