'use strict';

describe('View1Ctrl', function() {

	beforeEach(module('myApp.view1'));

	var $controller;

	beforeEach(inject(function(_$controller_){
	  // The injector unwraps the underscores (_) from around the parameter names when matching
	  $controller = _$controller_;
	}));

	describe('Calculator', function() {
		var $scope;
		var controller;
		var a = 20;
		var b = 2;
		var c = -2;
		
		beforeEach(function() {
    		$scope = {};
      		controller = $controller('View1Ctrl', { $scope: $scope });
      		expect(a).toEqual(jasmine.any(Number));
			expect(b).toEqual(jasmine.any(Number));
			expect(c).toEqual(jasmine.any(Number));
  		});

		it('should add two numbers correctly', function() {
      		var addFn = $scope.add(a, b);
		    expect(addFn).toEqual(22);
		});

		it('should subtract two numbers correctly', function() {
		    var lessFn = $scope.less(a, b);
		    expect(lessFn).toEqual(18);	
		});

		it('should add negative numbers', function() {
		    var addFn = $scope.add(a, c);
		    expect(addFn).toEqual(18);
		});

	})

});