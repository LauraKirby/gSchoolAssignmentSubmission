//Define a function sumOfRange that takes a number x and 
//returns the sum of all digits between 0 and x.

//Iterate to find solution
// function sumOfRange(x){
// 	var rangeItem = 0; 
// 	for (var i = 0; i < x; i++){
// 		rangeItem += i; 
// 	}
//   return rangeItem; 
// }
// console.log(sumOfRange(10)); 

//use recursion to find solution 
module.exports = { 
	sumOfRange: function sumOfRangeR (x){
		if (x === 0) {
			return 1; 
		}
		return (x + sumOfRangeR(x-1));
	}
}