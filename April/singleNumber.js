var singleNumber = function (nums) {
	let numSet = new Set();

	for (let i = 0; i < nums.length; i++) {
		let curr = nums[i];

		if (numSet.has(curr)) {
			numSet.delete(curr);
		} else numSet.add(curr);
	}

	let answer = numSet.values();

	return answer.next().value;
};
