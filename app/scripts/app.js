(function(ng) {
  'use strict';

  /**
   * @ngdoc overview
   * @name garageMapApp
   * @description
   * # garageMapApp
   *
   * Main module of the application.
   */
  ng
    .module('garageMapApp', [
      'ngRoute'
    ])
    .config(['$routeProvider', function($routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl: 'views/main.html',
          controller: 'MainCtrl',
          controllerAs: 'main'
        })
        .when('/import', {
          templateUrl: 'views/import.html',
          controller: 'ImportCtrl',
          controllerAs: 'import'
        })
        .when('/about', {
          templateUrl: 'views/about.html',
          controller: 'AboutCtrl',
          controllerAs: 'about'
        })
        .otherwise({
          redirectTo: '/'
        });
    }]);

})(angular);
