var containsDuplicate = function (nums) {
	//create a new set to record the first instance of each unique num
	const used = new Set();

	//loop through the whole nums array
	for (let i = 0; i < nums.length; i++) {
		let curr = nums[i];

		//check if the curr number is already found in our used set, if found we return true because there are duplicates
		if (used.has(curr)) return true;
		//if the number isnt found, then its the first time its been used so we add it to our used set and continue
		else used.add(curr);
	}

	//if we reach the end of the loop without finding a duplicate then we can return false
	return false;
};
