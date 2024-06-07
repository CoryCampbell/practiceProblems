var moveZeroes = function (nums) {
	//store how many zeroes we find in our nums array
	let zeroCount = 0;

	//loop through our array looking for zeroes
	for (let i = 0; i < nums.length; i++) {
		let curr = nums[i];

		//when we find a zero, we remove it from the array and add one to our zeroCount, we must also i-- to comensate for the removal of a num from the array
		if (curr === 0) {
			nums.splice(i, 1);
			zeroCount++;
			i--;
		}
	}

	//once we have counted all zeroes and removed them from the array, we can simply loop for each zero and push it to the end of our array
	for (let i = 0; i < zeroCount; i++) {
		nums.push(0);
	}

	return nums;
};
