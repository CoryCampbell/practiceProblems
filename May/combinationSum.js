var combinationSum = function (candidates, target) {
	//create our output array to return
	let output = [];

	//helper function to recursively solve the problem
	function helper(sum, arr, i) {
		//if our sum === 0 we push the current array to the output array
		if (sum === 0) {
			output.push(arr);
			return;
		}

		//if our sum is less than zero OR we have traversed past the length of the array we are done
		if (sum < 0 || i >= candidates.length) return;

		//recursively call helper function with our new difference, our first candidate, and our index
		helper(sum - candidates[i], [...arr, candidates[i]], i);

		//once we have recursively ran down the left side of our tree, we recurisively call our helper function on the next index
		helper(sum, arr, i + 1);
	}

	//this is where we start our recursion with an empty array and zero index
	helper(target, [], 0);

	//return our final output
	return output;
};
