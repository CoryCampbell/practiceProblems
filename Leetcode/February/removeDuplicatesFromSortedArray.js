var removeDuplicates = function (nums) {
	let used = new Set();
	for (let i = 0; i < nums.length; i++) {
		const current = nums[i];
		if (used.has(current)) {
			nums.splice(i, 1);
			i--;
		} else {
			used.add(current);
		}
	}
	return nums.length;
};
