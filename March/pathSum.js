var hasPathSum = function (root, targetSum, currentSum = 0) {
	//if there isnt a root
	if (!root) return false;

	//let our current sum = the value of our current node
	currentSum += root.val;

	//if the currentSum is our target sum AND it is a leaf node which means no children return true
	if (currentSum === targetSum && !root.left && !root.right) return true;

	//recursively traverse the tree
	return hasPathSum(root.left, targetSum, currentSum) || hasPathSum(root.right, targetSum, currentSum);
};
