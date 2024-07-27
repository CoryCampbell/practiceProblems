//helper function
const height = (node) => {
	//if there is no node then remove -1 from the height
	if (node === null) {
		return -1;
	}
	//otherwise recursively traverse the nodes
	return 1 + Math.max(height(node.left), height(node.right));
};

var isBalanced = function (root) {
	//if root is empty then the BST is balanced
	if (root === null) {
		return true;
		//otherwise we need to traverse the nodes of the root
	} else {
		//tracking the difference between the left and right node heights
		let diff = Math.abs(height(root.left) - height(root.right));

		//return the boolean value of if diff is greater than 2 AND recursively the node heights are balanced
		return diff < 2 && isBalanced(root.left) && isBalanced(root.right);
	}
};
