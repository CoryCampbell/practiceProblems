var sortedArrayToBST = function (nums) {
	//check for empty nums list and end of recursion
	if (!nums.length) return null;

	//setup center
	let mid = Math.floor(nums.length / 2);
	let root = new TreeNode(nums[mid]);

	//recursively add the subtrees
	root.left = sortedArrayToBST(nums.slice(0, mid));
	root.right = sortedArrayToBST(nums.slice(mid + 1));
	return root;
};
