var minDepth = function (root) {
	//if there isnt a root then the depth is zero
	if (!root) return 0;

	//if there isnt a root.left, traverse down the right
	if (!root.left) return minDepth(root.right) + 1;

	//if there isnt a root.right, traverse down the left
	if (!root.right) return minDepth(root.left) + 1;

	//return the smallest depth through recursion
	return Math.min(minDepth(root.left), minDepth(root.right)) + 1;
};

//Time complexity O(n) because we have to traverse through the tree
//Space Complexity O(1) because we are not
