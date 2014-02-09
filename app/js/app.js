/* global window */

(function (angular) {

  "use strict";

  var app = angular.module('app', ['ngRoute']);

  app.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/home', {
      // this path has to have app at the start to match the $templatecache
      templateUrl: 'app/partials/main.html',
      controller: 'MainCtrl'
    });

    $routeProvider.otherwise({redirectTo: '/home'});
  }]);


  app.controller('MainCtrl', ['$scope', function($scope) {

  }]);

}(window.angular));