const chars = {
	2: "abc",
	3: "def",
	4: "ghi",
	5: "jkl",
	6: "mno",
	7: "pqrs",
	8: "tuv",
	9: "wxyz"
};

var letterCombinations = function (digits) {
	//if the digits parameter is empty then we return an empty array
	if (!digits.length) return [];

	let res = [];

	//helper function to recursively find all the possible letter combinations
	function backtrack(idx, comb) {
		//if our index is at the end of our parameter then we are done and return all the combinations
		if (idx === digits.length) {
			res.push(comb);
			return;
		}

		//for each letter in our current digit value we recursively find all possible combinations
		for (const letter of chars[digits[idx]]) {
			backtrack(idx + 1, comb + letter);
		}
	}

	//start the recursion at index 0 and an empty string
	backtrack(0, "");

	return res;
};
