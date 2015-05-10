//Define a function called power which take two arguments: a number and an exponent to raise that number to. For example:
//console.log(power(2, 3));
//=> 8

module.exports = { 
	power: function pwr(num, exp) {
		if (exp === 0) {
			return 1;
		}
		return num * pwr(num, (exp -1)); 
	}
}