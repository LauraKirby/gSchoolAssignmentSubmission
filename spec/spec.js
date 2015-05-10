var calcPwr = require("../powerRecursive.js");
var calcFib = require("../fibonacciRecursive.js");
var calcSumRange = require("../sumOfRangeRecursion.js");

describe('Powers calculator', function() {
	xit ('should return the return value of the base', function (){
	  expect(calcPwr.power(1)).toEqual(0);
	}); 

	it ('should return a number with the given exponent calculated', function (){
	  expect(calcPwr.power(2,3)).toEqual(8);
	}); 
});

describe('Fibonacci calculator', function() {
	it ('should return the return value of the base', function (){
	  expect(calcFib.fibonacci(2)).toEqual(1);
	}); 

	it ('should return a number the number in the Fibonacci sequence for the given index', function (){
	  expect(calcFib.fibonacci(6)).toEqual(8);
	}); 
});

describe('sumOfRange calculator', function() {
	xit('should return the return value of the base', function() {
		expect(calcSumRange.sumOfRange(x)).toEqual(1);
		//Jasmine states that x is not defined. This is true but I do not know the best way to update the test to include 
		});
	it('should return the sum of every number from the input to zero', function() {
		expect(calcSumRange.sumOfRange(10)).toEqual(56);
	});
});