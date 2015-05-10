//Fibonacci 
// function fib(x) {
//   var arr = [1,1]; 
//   for (var i = 0; i < x-1; i++) {
//     arr.push(arr[i]+arr[i+1]);
//   }
//   return arr; 
// }
// console.log(fib(6));


//Fibonacci Recrusive 

module.exports = { 
	fibonacci: function fibR (x){
		if(x <= 2){
			return 1; 
		}
		return (fibR(x-2) + fibR(x-1)); 
	}
}