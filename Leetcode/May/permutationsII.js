var permuteUnique = function (nums) {
  //sort nums array for easier solution
  nums.sort((a, b) => a - b);
	let res = [];

  //helper function to recursively solve
	let iterate = (arr, temp) => {

    //if statement for final solution to single length array
		if (arr.length === 1) {
			res.push([...temp, arr[0]]);
			return;
		}

    //loop through the array
		for (let i = 0; i < arr.length; i++) {

      //check to skip over duplicate numbers in arr
			if (arr[i] === arr[i - 1]) continue;

      //recursively call the helper function to take next step
			iterate(
				arr.filter((num, idx) => idx !== i),
				[...temp, arr[i]]
			);
		}
	};

	iterate(nums, []);

	return res;
};
