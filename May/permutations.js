var permute = function (nums) {

  //if nums is only one number theres only one permutation
	if (nums.length === 1) return [nums];

	let res = [];

  //start a loop to loop through all numbers
	for (let i = 0; i < nums.length; i++) {
    //n will be our first number of this iteration
		let n = nums.shift();

    //perms will be the recursive result
		let perms = permute(nums.slice());

    //for each result of our perms we can add our next number in list
		for (let p of perms) {
			p.push(n);
		}

    //then we can push the final permutations in our perms list to our result
		res.push(...perms);
		nums.push(n);
	}

	return res;
};
