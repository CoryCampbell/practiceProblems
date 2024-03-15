var isSymmetric = function (root) {
	//check if root exists, if not it is symmetrical
	if (!root) return true;

	//start a queue with the first left and right nodes to traverse
	let queue = [root.left, root.right];

	//while there is a queue, continue traversing
	while (queue.length > 0) {
		let leftNode = queue.shift();
		let rightNode = queue.shift();

		//if there are no nodes in this branch, continue to next iteration
		if (leftNode == null && rightNode == null) continue;

		//if there is a value that isnt symmetrical, return false
		if (leftNode == null || rightNode == null || leftNode.val !== rightNode.val) {
			return false;
		}

		//add next nodes to compare, based on a symmetrical approach
		queue.push(leftNode.left, rightNode.right);
		queue.push(leftNode.right, rightNode.left);
	}

	return true;
};
