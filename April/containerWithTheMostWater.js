var maxArea = function (height) {
	let left = 0;
	let right = height.length - 1;
	let highestArea = 0;

	while (left < right) {
		let width = right - left;
		let h = Math.min(height[left], height[right]);
		let water = width * h;

		highestArea = Math.max(highestArea, water);

		if (height[left] < height[right]) {
			left++;
		} else {
			right--;
		}
	}

	return highestArea;
};
