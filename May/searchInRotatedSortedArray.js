// Must solve in O(log n) time

var search = function (nums, target) {
	//start our two pointers at the beginning and the end of the array
	let low = 0;
	let high = nums.length - 1;

	//
	while (low <= high) {
		//set our mid point to the middle of the length of our array
		let mid = Math.floor((low + high) / 2);

		//if our mid number is our target then no need to traverse further
		if (nums[mid] === target) {
			return mid;
		}

		//if our lowest number is less than our mid number than we know the left half of the array is sorted
		if (nums[low] <= nums[mid]) {
			//if our target is in the left side than we can take a step towards it by making
			//our high value one less than our mid
			if (nums[low] <= target && target < nums[mid]) {
				high = mid - 1;
				//otherwise we set our lowest point one right of mid and will search the right half of the array
			} else {
				low = mid + 1;
			}
			//if our target is in the right side of the array
		} else {
			//if we enter this else statement we know that our left side of the array is not sorted
			if (nums[mid] < target && target <= nums[high]) {
				//we can set our lowest point one to the right of mid point
				low = mid + 1;
			} else {
				//otherwise we set our highest point one left of our mid point
				high = mid - 1;
			}
		}
	}

	return -1;
};
