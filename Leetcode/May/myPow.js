var myPow = function (x, n) {
	// if our power value is zero, our result is one. any number to the power of zero equals one
	if (n === 0) return 1;

	//if our power value is a negative then we can normalize our values to represent that
	if (n < 0) {
		x = 1 / x;
		n = -n;
	}

	//if our power value is an even number then we can recursively call our function to break it down into chunks until its odd
	if (n % 2 === 0) {
		let halfPower = myPow(x, n / 2);
		return halfPower * halfPower;

		//if our power value is an odd number we recursively call our function with the value of n - 1,
		//representing one step in the power calculation
	} else {
		return x * myPow(x, n - 1);
	}
};
