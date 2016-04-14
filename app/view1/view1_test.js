'use strict';

describe('View1Ctrl', function() {

	beforeEach(module('myApp.view1'));

	var $controller;

	beforeEach(inject(function(_$controller_){
	  // The injector unwraps the underscores (_) from around the parameter names when matching
	  $controller = _$controller_;
	}));

	describe('Calculator', function() {

		it('should add two numbers correctly', function() {
			var $scope = {};
      		var controller = $controller('View1Ctrl', { $scope: $scope });
      		var addFn = $scope.add(1, 2);
		    expect(addFn).toEqual(3);
		});

		it('should subtract two numbers correctly', function() {
			var $scope = {};
      		var controller = $controller('View1Ctrl', { $scope: $scope });
		    var lessFn = $scope.less(6, 2);
		    expect(lessFn).toEqual(4);	
		});

		it('should add negative numbers', function() {
			var $scope = {};
      		var controller = $controller('View1Ctrl', { $scope: $scope });
		    var addFn = $scope.add(10, -2);
		    expect(addFn).toEqual(8);
		});

	})

});