/* global window */
(function (angular) {
  'use strict';
  var app = angular.module('app');
  app.factory('TestSvc', function () {
    return { name: 'Nick' };
  });
}(window.angular));