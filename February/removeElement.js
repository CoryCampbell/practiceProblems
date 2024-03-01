var removeElement = function (nums, val) {
	for (let i = 0; i < nums.length; i++) {
		let current = nums[i];

		if (current === val) {
			nums.splice(i, 1);
			i--;
		}
	}
	return nums.length;
};
