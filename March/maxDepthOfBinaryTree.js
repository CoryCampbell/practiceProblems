var maxDepth = function (root) {
	//if there is no root, there is no depth
	if (!root) return 0;

	//if there is a left branch, traverse it
	let left = maxDepth(root.left);
	//if there is a right branch, traverse it
	let right = maxDepth(root.right);

	//return 1 + whatever has the deepest side of depth
	return 1 + Math.max(left, right);
};

//Time complexit = O(n) because we must traverse all nodes of the tree
//Space complexity = O(n) worst or O(n log n) best case
