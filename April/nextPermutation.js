var nextPermutation = function (nums) {
	let len = nums.length;
	let k, l;

  //loop through array of elements until we find where k is smaller than k + 1
	for (k = len - 2; k >= 0; k--) {
		if (nums[k] < nums[k + 1]) {
			break;
		}
	}

  //if our k index never popped then we are left with k =-1 which means we are at the end of the lexical range we can reverse the array
	if (k < 0) {
		nums.reverse();
	} else {
    //loop through our array until we find the first value larger than our k value
		for (l = len - 1; l > k; l--) {
			if (nums[l] > nums[k]) {
				break;
			}
		}

    // once we know where the next largest value is, we can swap around the numbers in the array
		[nums[k], nums[l]] = [nums[l], nums[k]];

    //now we mutate the array so we can sort the numbers to the right of the swapped numbers
		nums.splice(k + 1, len - k - 1, ...nums.slice(k + 1).reverse());
	}
};
