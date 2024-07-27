var threeSumClosest = function (nums, target) {
	//start by sorting the array of nums for more organized processing with two pointers
	nums.sort((a, b) => a - b);

	//start with a default closest value for comparison
	let closest = nums[0] + nums[1] + nums[2];

	//loop through the array of nums using i as the first number for math ops
	for (let i = 0; i < nums.length - 2; i++) {
		//start with two pointers at the first and last positions of the rest of the available nums
		let left = i + 1;
		let right = nums.length - 1;

		//loop through the nums until left is equal to right, meaning you have traversed all possible positions
		while (left < right) {
			let sum = nums[i] + nums[left] + nums[right];

			//return the sum if you find the target value from the sum of i + left + right
			if (sum == target) {
				return sum;

				// if our sum is less than the target value we know we need to traverse the array
				// and grow our sum value by moving our left pointer over to the right
			} else if (sum < target) {
				left++;
				// if our sum is too high then we know we need to traverse the array
				// and shrink our sum value by moving our right pointer over to the left
			} else {
				right--;
			}

			// if our sum value is less than our current closest sum value then we update the closest sum
			if (Math.abs(sum - target) < Math.abs(closest - target)) {
				closest = sum;
			}
		}
	}

	//finally we return the closest sum value (if target sum wasnt found)
	return closest;
};
