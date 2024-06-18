var maxSubArray = function (nums) {
	//edge case
	if (!nums.length) return 0;

	//start with max value equal to our fist number in array
	let maxSum = nums[0];
	let sumSubArray = nums[0];

	//loop through our array, comparing the next value added to our current subarray vs the next value to determine which is bigger
	for (let i = 1; i < nums.length; i++) {
		sumSubArray = Math.max(sumSubArray + nums[i], nums[i]);
		maxSum = Math.max(sumSubArray, maxSum);
	}

	return maxSum;
};
