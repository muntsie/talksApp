'use strict';

/* Controllers */

var talksApp = angular.module('talksApp', []);

talksApp.controller('TalksAppController', ['$scope', '$http', function($scope, $http) {
  $http.get('talks/talks.json').success(function(data) {
    $scope.talks = data;
  });
    $scope.orderProp = 'age';
}]);