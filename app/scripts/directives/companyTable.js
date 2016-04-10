(function(ng) {
  'use strict';

  /**
   * @ngdoc function
   * @name garageMapApp.directive:companyTable
   * @description
   * # companyTable
   * A directive showing company data inside a table
   */
  ng.module('garageMapApp')
    .directive('companyTable', function() {
      return {
        restrict: 'E',
        scope: {
          companies: '=?'
        },
        templateUrl: 'templates/companyTable.html'
      };
    });

})(angular);
