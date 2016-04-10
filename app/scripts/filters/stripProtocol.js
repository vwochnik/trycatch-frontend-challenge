(function(ng) {
  'use strict';

  /**
   * @ngdoc function
   * @name garageMapApp.filter:stripProtocol
   * @description
   * # stripProtocol
   * Strips the URL protocol from a string.
   */
  ng.module('garageMapApp')
    .filter('stripProtocol', function() {
      return function(url) {
        return url.replace(/^.*?:\/\//g, '');
      };
    });

})(angular);
