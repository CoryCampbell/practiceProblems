var longestPalindrome = function (s) {
	let ans = [0, 0];

	for (let i = 0; i < s.length; i++) {
		let oddLength = expand(i, i, s);

		if (oddLength > ans[1] - ans[0] + 1) {
			let dist = Math.floor(oddLength / 2);
			ans[0] = i - dist;
			ans[1] = i + dist;
		}

		let evenLength = expand(i, i + 1, s);

		if (evenLength > ans[1] - ans[0] + 1) {
			let dist = Math.floor(evenLength / 2) - 1;
			ans[0] = i - dist;
			ans[1] = i + 1 + dist;
		}
	}

	let start = ans[0];
	let end = ans[1];
	return s.substring(start, end + 1);
};

function expand(i, j, s) {
	let left = i;
	let right = j;

	while (left >= 0 && right < s.length && s.charAt(left) === s.charAt(right)) {
		left--;
		right++;
	}

	return right - left - 1;
}
