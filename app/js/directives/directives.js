/* global window */

(function (angular) {

  "use strict";

  var app = angular.module('app');

  app.directive('dirone', function (TestSvc) {
    return {
      restrict : 'E',
      replace : true,
      // this path has to have app at the start to match the $templatecache
      templateUrl: 'app/partials/tmpl1.html',
      scope : {},
      controller : function ($scope) {
        $scope.data = {
          name : 'Nick'
        };
      }
    };
  });


  app.directive('dirtwo', function (TestSvc) {
    return {
      restrict : 'E',
      replace : true,
      // this path has to have app at the start to match the $templatecache
      templateUrl: 'app/partials/tmpl2.html',
      scope : {},
      controller : function ($scope) {
        $scope.data = {
          surname : 'Lowman'
        };
      }
    };
  });

}(window.angular));