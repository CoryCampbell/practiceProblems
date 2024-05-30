var isHappy = function (n) {
	//normalize our data
	let number = n.toString();

	//create a set for checking if we are looping repeatedly resulting in a return value of "false"
	let seen = new Set();

	//while our set doesnt have a number we have already seen
	while (!seen.has(number)) {
		let total = 0;

		//loop through every digit of our number and sum values up
		for (let i = 0; i < number.length; i++) {
			total += Math.pow(parseInt(number[i]), 2);
		}

		//if our total is one, we found a happy number!
		if (total === 1) return true;

		//add our current value to our seen list to prevent looping
		seen.add(number);

		//update our number to next value of powers summed together
		number = total.toString();
	}

	//if we get here we know we have looped and will never find a value of one
	return false;
};
