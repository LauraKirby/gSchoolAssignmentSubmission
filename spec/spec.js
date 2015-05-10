var calcPwr = require("../powerRecursive.js");
var calcFib = require("../fibonacciRecursive.js");

describe('Powers calc', function() {
	xit ('should return a number with the given exponent calculated', function (){
	  expect(calcPwr.power(1)).toEqual(0);
	}); 

	it ('should return a number with the given exponent calculated', function (){
	  expect(calcPwr.power(2,3)).toEqual(8);
	}); 
});

describe('Fibonacci calc', function() {
	it ('should return a number with the given exponent calculated', function (){
	  expect(calcFib.fibonacci(2)).toEqual(1);
	}); 

	it ('should return a number with the given exponent calculated', function (){
	  expect(calcFib.fibonacci(6)).toEqual(8);
	}); 
});