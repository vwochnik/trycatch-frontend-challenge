(function(ng) {
  'use strict';

  var csvPattern = '(\\,|\\r?\\n|\\r|^)(?:"([^"]*(?:""[^"]*)*)"|([^"\\,\\r\\n]*))';

  function parseCsv(string, delim) {
    var regex = new RegExp(csvPattern.replace(',', delim), 'gi'),
        ary = [[]], matches = null, value;

    while (matches = regex.exec(string)) {
      if (matches.index === regex.lastIndex) {
        regex.lastIndex++;
      }

      if ((matches[1].length) && (matches[1] !== delim)) {
          ary.push([]);
      }

      if (matches[2] !== undefined) {
          value = matches[2].replace(new RegExp('""', 'g'), '"');
      } else {
          value = matches[3];
      }

      ary[ary.length-1].push(value);
    }

    return ary;
  }

  function transformData(data, head) {
    var ary = [], obj;

    data.forEach(function(row) {
      obj = {};
      for (var i = 0; i < row.length; i++) {
        if (i == head.length) {
          head.push("Column " + (i+1));
        }

        obj[head[i]] = row[i];
      }

      ary.push(obj);
    });

    return ary;
  }

  /**
   * @ngdoc function
   * @name garageMapApp.directive:csvImport
   * @description
   * # AboutCtrl
   * Controller of the about view
   */
  ng.module('garageMapApp')
    .directive('csvImport', function() {
      return {
        controller: ['$scope', function($scope) {
          $scope.csvDelims = [[',', ','], [';', ';'], ['\t', 'Tab']];

          $scope.csvDataChanged = $scope.csvDelimChanged = $scope.csvHeaderChanged = function() {
            var ary, data;

            ary = parseCsv($scope.csvData, $scope.csvDelim);
            if ($scope.csvHeader) {
              data = transformData(ary, ary.shift());
            } else {
              data = transformData(ary, []);
            }

            $scope.updateData(data);
          };
        }],
        link: function($scope, $elem, $attrs, ctrl) {
          $scope.updateData = function(data) {
            ctrl.$setViewValue(data);
          };
        },
        restrict: 'E',
        require: '^ngModel',
        templateUrl: 'templates/csvImport.html'
      }
    });

})(angular);
