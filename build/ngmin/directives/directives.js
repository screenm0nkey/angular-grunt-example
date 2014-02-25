/* global window */
(function (angular) {
  'use strict';
  var app = angular.module('app');
  app.directive('dirone', [
    'TestSvc',
    function (TestSvc) {
      return {
        restrict: 'E',
        replace: true,
        templateUrl: 'app/partials/tmpl1.html',
        scope: {},
        controller: [
          '$scope',
          function ($scope) {
            $scope.data = { name: 'Nick' };
          }
        ]
      };
    }
  ]);
  app.directive('dirtwo', [
    'TestSvc',
    function (TestSvc) {
      return {
        restrict: 'E',
        replace: true,
        templateUrl: 'app/partials/tmpl2.html',
        scope: {},
        controller: [
          '$scope',
          function ($scope) {
            $scope.data = { surname: 'Lowman' };
          }
        ]
      };
    }
  ]);
}(window.angular));