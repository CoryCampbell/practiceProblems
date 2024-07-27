var jump = function (nums) {
	let jumps = 0;
	let cur_end = 0;
	let farthest = 0;

	//loop through the length of the array to try and find the best route
	for (let i = 0; i < nums.length - 1; ++i) {
		//turn farthest into either the current farthest jump or total of this iteration count and the total of the value of nums[i]
		farthest = Math.max(farthest, i + nums[i]);

		//if our index is current end
		if (i === cur_end) {
			//we add to the total amount of jumps made
			++jumps;
			//and update our ending point to the farthest weve made it currently
			cur_end = farthest;
		}
	}

	return jumps;
};
