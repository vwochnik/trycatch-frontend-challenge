(function(ng) {
  'use strict';

  function centerCoordinate(coordinates) {
    var x = 0, y = 0, z = 0, latrad, lngrad;

    coordinates.forEach(function(coordinate) {
      latrad = coordinate.latitude * Math.PI / 180;
      lngrad = coordinate.longitude * Math.PI / 180;

      x += Math.cos(latrad) * Math.cos(lngrad);
      y += Math.cos(latrad) * Math.sin(lngrad);
      z += Math.sin(latrad);
    });

    x /= coordinates.length;
    y /= coordinates.length;
    z /= coordinates.length;

    lngrad = Math.atan2(y, x);
    latrad = Math.atan2(z, Math.sqrt(x*x + y*y));

    return {
      latitude: latrad * 180 / Math.PI,
      longitude: lngrad * 180 / Math.PI
    };
  }

  /**
   * @ngdoc function
   * @name garageMapApp.directive:companyMap
   * @description
   * # companyMap
   * A directive showing company data inside a map
   */
  ng.module('garageMapApp')
    .directive('companyMap', function() {
      return {
        controller: ['$scope', 'NgMap', function($scope, NgMap) {
          $scope.showInfo = function(c) { alert(JSON.stringify(c)); };
          NgMap.getMap().then(function(map) {
            $scope.showInfo = function(e, company) {
              $scope.selectedCompany = company;
              map.showInfoWindow('info-window', this);
            };
          });

          $scope.$watch('companies', function(companies) {
            $scope.center = centerCoordinate(
              companies.map(function(company) {
                return {
                  latitude: parseFloat(company.latitude),
                  longitude: parseFloat(company.longitude)
                };
              }));
          });
        }],
        restrict: 'E',
        scope: {
          companies: '=?'
        },
        templateUrl: 'templates/companyMap.html'
      };
    });

})(angular);
