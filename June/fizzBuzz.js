var fizzBuzz = function (n) {

  //helper function for cleaner code
	let helper = (num) => {
		if (num % 15 === 0) {
			return "FizzBuzz";
		} else if (num % 3 === 0) {
			return "Fizz";
		} else if (num % 5 === 0) {
			return "Buzz";
		} else {
			return num;
		}
	};

	let res = [];

	for (let i = 1; i <= n; i++) {
		res.push(helper(`${i}`));
	}

	return res;
};
