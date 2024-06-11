var isPowerOfThree = function (n) {
	//if we recursively end up at 3 or 1 then we know we have a power of 3
	if (n === 1 || n === 3) return true;

	//if our number is less that 3 and not a 1 then we know its not a power of three;
	if (n < 3) return false;

	//recursively call the function on the quotient of n / 3
	return isPowerOfThree(n / 3);
};
