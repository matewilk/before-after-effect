'use strict';

/**
 * @ngdoc overview
 * @name prototypeApp
 * @description
 * # prototypeApp
 *
 * Main module of the application.
 */
angular.module('prototypeApp', ['ngRoute', 'angular-responsive', 'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngTouch'])
  .config(function ($routeProvider, responsiveHelperProvider) {

        var device = 'desktop';
        var responsiveHelper = responsiveHelperProvider.$get();
        if(responsiveHelper.isMobile()){
            device = 'mobile';
        }
        $routeProvider.when('/view1', {templateUrl: 'views/' + device + '/view1.html'});
        $routeProvider.when('/view2', {templateUrl: 'views/' + device + '/view2.html'});
        $routeProvider.otherwise({redirectTo: '/view1'});
//    $routeProvider
//      .when('/', {
//        templateUrl: 'views/main.html',
//        controller: 'MainCtrl'
//      })
//      .when('/about', {
//        templateUrl: 'views/about.html',
//        //controller: 'AboutCtrl'
//      })
//      .otherwise({
//        redirectTo: '/'
//      });
  });
