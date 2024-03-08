var climbStairs = function (n) {
	let current = 0;
	let prev = 1;
	let two = 0;
	for (let i = 0; i < n; i++) {
		current = two + prev;
		two = prev;
		prev = current;
	}

	return prev;
};
