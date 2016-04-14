'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope', function($scope) {

	$scope.add = function(a, b) {
		return a + b;
	};

	$scope.less = function(a, b) {
		return a - b;
	};
	
	$scope.a = 10;
	$scope.b = 2;
	
	$scope.resultAdd = $scope.add($scope.a, $scope.b);
	$scope.resultLess = $scope.less($scope.a, $scope.b);
}]);