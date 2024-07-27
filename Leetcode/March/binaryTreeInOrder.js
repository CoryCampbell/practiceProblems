var inorderTraversal = function (root) {
	let res = [];

	let stack = [];

	//outer loop to ensure there is a current pointer
	while (root || stack.length > 0) {
		//inner loop that traverses as far left as possible
		while (root) {
			stack.push(root);
			root = root.left;
		}

		//this sets the root back to the last node from the stack
		root = stack.pop();

		//this adds the current root value to the sack
		res.push(root.val);

		//this turns the current pointer to the right value of the current root
		root = root.right;
	}

	return res;
};

//Time complexity is O(n) because it has to traverse every node
//space complexity is O(n) because we are creating a result as long as every node in the tree
