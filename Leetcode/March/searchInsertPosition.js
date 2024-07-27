var searchInsert = function (nums, target) {
	if (nums[nums.length - 1] < target) return nums.length;
	if (nums.length === 1 && nums[0] > target) return 0;

	for (let i = 0; i < nums.length; i++) {
		let current = nums[i];
		let last = nums[i - 1];
		let next = nums[i + 1];

		if (current === target) return i;
		if (last === undefined && target < next) {
			console.log("first index location");
			if (current > target) return i;
			else return i + 1;
		}

		if (target > last && target < next) {
			console.log("second or higher index");
			return i + 1;
		}
	}
};
