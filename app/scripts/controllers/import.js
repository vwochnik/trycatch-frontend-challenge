(function(ng) {
  'use strict';

  /**
   * @ngdoc function
   * @name garageMapApp.controller:ImportCtrl
   * @description
   * # ImportCtrl
   * Controller of the import view
   */
  ng.module('garageMapApp')
    .controller('ImportCtrl', ['$scope', 'DataService', function($scope, DataService) {

      $scope.parsedDataChanged = function() {
        $scope.headerColumns = [];
        $scope.columnMapping = [
          ["id","Id",undefined],
          ["company","Company Name",undefined],
          ["founder","Founder",undefined],
          ["city","City",undefined],
          ["country","Country",undefined],
          ["postal","Postal Code",undefined],
          ["street","Street",undefined],
          ["photo","Photo",undefined],
          ["homepage","Home Page",undefined],
          ["latitude","Garage Latitude",undefined],
          ["longitude","Garage Longitude",undefined]];

        if ($scope.parsedData.length > 0) {
          var firstObj = $scope.parsedData[0];
          for (var key in firstObj) {
            if (firstObj.hasOwnProperty(key)) {
              $scope.headerColumns.push(key);
            }
          }
        }
      };

      $scope.canImport = function() {
        if (($scope.columnMapping) && ($scope.columnMapping.length > 0)) {
          for (var i = 0; i < $scope.columnMapping.length; i++) {
            if ($scope.columnMapping[i][2] === undefined) {
              return false;
            }
          }
        } else {
          return false;
        }
        return true;
      };

      $scope.importData = function() {
        var result = [], obj2;

        $scope.parsedData.forEach(function(obj) {
          obj2 = {};

          $scope.columnMapping.forEach(function(mapping) {
            obj2[mapping[0]] = obj[mapping[2]];
          });

          result.push(obj2);
        });

        DataService.set(result);
      };
    }]);

})(angular);
