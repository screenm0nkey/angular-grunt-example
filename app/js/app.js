/* global window */

(function (angular) {

  "use strict";

  var app = angular.module('app', ['ngRoute']);

  app.config(function($routeProvider) {
    $routeProvider.when('/home', {
      // this path has to have app at the start to match the $templatecache
      templateUrl: 'app/partials/main.html',
      controller: 'MainCtrl'
    });

    $routeProvider.otherwise({redirectTo: '/home'});
  });


  app.controller('MainCtrl',function($scope) {

  });

}(window.angular));