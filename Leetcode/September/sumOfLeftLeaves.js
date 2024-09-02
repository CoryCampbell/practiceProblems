var sumOfLeftLeaves = function (root, total = 0) {
  if (!root) return total;

  if (root.left && !root.left.left && !root.left.right) total += root.left.val;

  total = sumOfLeftLeaves(root.left, total);
  total = sumOfLeftLeaves(root.right, total);

  return total;
};
