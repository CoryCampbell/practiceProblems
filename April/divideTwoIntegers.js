var divide = function (dividend, divisor) {
	//for returning correct result we find out if out quotient will be negative or positive
	const isNegative = Math.sign(divisor) !== Math.sign(dividend);

	//simple way of normalizing data for easier equations
	dividend = Math.abs(dividend);
	divisor = Math.abs(divisor);

	//start with a count of zero; this will tally up to our final result to return
	let count = 0;

	//while we still have some dividend to subtract from we can continue or loops
	while (divisor <= dividend) {
		//set our value to divisor value for this current iteration
		let value = divisor;

		//set our current multiple value to 1 for this current iteration
		let multiple = 1;

		//while we can get a higher power out of our current iteration values keep
		//counting up to represent a higher power to chunk out a larger value out of our dividend
		while (value + value <= dividend) {
			//each iteration doubles our value; representing the next power
			value += value;
			multiple += multiple;
		}

		//once we find the highest power value we can remove from our current dividend value
		dividend = dividend - value;
		//keep track of all the multiples we have iterated through
		count += multiple;
	}

	//if our final "quotient" value is greater than our signed 32-bit integer range
	//we return the minimum or maximum value allowed in the range respectively
	if (count > 2 ** 31 - 1) {
		return isNegative ? -(2 ** 31) : 2 ** 31 - 1;
	}

	//finally we return our final count depending on whether the quotient was negative or positive
	return isNegative ? -count : count;
};
