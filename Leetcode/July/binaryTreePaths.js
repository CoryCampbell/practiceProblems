var binaryTreePaths = function (root) {
  let paths = [];

  function findPaths(node, path) {
    if (!node) return;

    path.push(node.val);

    if (!node.left && !node.right) {
      paths.push(path.join("->"));
    } else {
      findPaths(node.left, [...path]);
      findPaths(node.right, [...path]);
    }
  }

  findPaths(root, []);
  return paths;
};
