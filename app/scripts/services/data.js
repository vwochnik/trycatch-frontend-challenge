(function(ng) {
  'use strict';

  /**
   * @ngdoc function
   * @name garageMapApp.factory:DataService
   * @description
   * # DataService
   * A service for storing imported data application-internally
   */
  ng.module('garageMapApp')
    .factory('DataService', ['$localStorage', function($localStorage) {
      var data = $localStorage.applicationData || [];

      return {
        get: function() {
          return data;
        },
        set: function(newData) {
          data = newData || [];
          $localStorage.applicationData = newData;
        }
      };
    }]);

})(angular);
