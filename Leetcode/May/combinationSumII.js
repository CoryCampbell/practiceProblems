var combinationSum2 = function (candidates, target) {
	//start by sorting the list of candidates for easier solution
	candidates.sort((a, b) => a - b);
	let res = [];

	let iterate = (index, sum, temp) => {
		//if our sum is greater than our target we can end this iteration
		if (sum > target) return;
		//if the sum is our target then we can push our temp value into our res array
		if (sum === target) {
			res.push(temp);
			return;
		}

		//this loop will skip over any duplicates combinations
		for (let i = index; i < candidates.length; i++) {
			//if our index has changed and our last candidate value is the same as our next value then we can skip over it
			//to avoid any duplicate combinations
			if (i != index && candidates[i] === candidates[i - 1]) continue;
			//otherwise we can can recursively call the function again with index one higher, the sum of:
			//our current sum and current candidate value, and a temp array of prev candidates and current candidate
			iterate(i + 1, sum + candidates[i], [...temp, candidates[i]]);
		}
	};

	iterate(0, 0, []);

	return res;
};
