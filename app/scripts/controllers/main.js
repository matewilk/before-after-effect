'use strict';

/**
 * @ngdoc function
 * @name prototypeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the prototypeApp
 */
angular.module('prototypeApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
