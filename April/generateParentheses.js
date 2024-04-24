var generateParenthesis = function (n) {
	const stack = [];
	const result = [];

	//helper function that recursively adds new iterations to result
	//by checking the amount of opening and closing brackets

	const backtrack = (open, close) => {
		//if the amount of opening brackets is equal to the amount of closing brackets
		// AND we have reached the n value, push the stack to the result
		if (open == close && open == n) {
			result.push(stack.join(""));
			return;
		}

		//if we dont have enough opener brackets we need to add one to the stack
		//and then recursively call the helper function to add the next closing bracket
		if (open < n) {
			stack.push("(");
			backtrack(open + 1, close);
			stack.pop();
		}

		//if we dont have enough closer brackets we need to add one and recursively call the helper function
		//to get the next iterations of possible outcomes
		if (close < open) {
			stack.push(")");
			backtrack(open, close + 1);
			stack.pop();
		}
	};

	//this is where we start the recursion on a fresh stack
	backtrack(0, 0);

	return result;
};
