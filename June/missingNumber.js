var missingNumber = function (nums) {
	//sort our nums array for simple solution
	nums.sort((a, b) => a - b);

	//loop through the whole array until our curr doesnt match our index
	for (let i = 0; i < nums.length; i++) {
		let curr = nums[i];

		if (curr !== i) return i;
	}

	//if we reach the end of our array then we know the last number missing is the value of the length of the nums array
	return nums.length;
};
