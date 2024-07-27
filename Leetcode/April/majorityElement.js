var majorityElement = function (nums) {
	let m = new Map();
	m.set(nums[0], 1);

	let highestCount = m.get(nums[0]);
	let res = nums[0];

	for (let i = 1; i < nums.length; i++) {
		let curr = nums[i];

		if (m.has(curr)) {
			m.set(curr, m.get(curr) + 1);
		} else m.set(curr, 1);

		if (highestCount < m.get(curr)) {
			highestCount = m.get(curr);
			res = curr;
		}
	}

	return res;
};
