(function(ng) {
  'use strict';

  /**
   * @ngdoc function
   * @name garageMapApp.directive:sorting
   * @description
   * # AboutCtrl
   * Controller of the about view
   */
  ng.module('garageMapApp')
    .directive('sorting', function() {
      return {
        link: function($scope, $elem, $attrs, ctrl) {
          $scope.setSorting = function(value) {
            ctrl.$setViewValue(value);
          };

          $scope.sortingIs = function(value) {
            return (ctrl.$viewValue === value);
          };
        },
        restrict: 'E',
        transclude: true,
        require: '^ngModel',
        scope: {
          sortBy: '=?'
        },
        templateUrl: 'templates/sorting.html'
      };
    });

})(angular);
