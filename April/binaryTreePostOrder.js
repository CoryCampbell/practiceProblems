function helper(root, res) {
	if (!root) return res;
	helper(root.left, res);
	helper(root.right, res);
	res.push(root.val);
}

var postorderTraversal = function (root) {
	let res = [];

	if (!root) return res;
	helper(root, res);

	return res;
};
