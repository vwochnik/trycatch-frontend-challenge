(function(ng) {
  'use strict';

  /**
   * @ngdoc function
   * @name garageMapApp.controller:MainCtrl
   * @description
   * # MainCtrl
   * Controller of the main view
   */
  ng.module('garageMapApp')
    .controller('MainCtrl', ['$scope', 'DataService', function($scope, DataService) {
      $scope.data = DataService.get();
    }]);

})(angular);
