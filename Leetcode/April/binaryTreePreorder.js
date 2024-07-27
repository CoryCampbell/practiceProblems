function helper(root, res) {
	if (!root) return;
	res.push(root.val);
	helper(root.left, res);
	helper(root.right, res);
}

var preorderTraversal = function (root) {
	let res = [];
	if (!root) return res;
	helper(root, res);
	return res;
};
