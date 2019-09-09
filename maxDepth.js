var maxDepth = function(root) {
  // init a depth counter at 1
  if (!root || root.length === 0) return 0;
  let depth = 1;
  // init a helper function with current root and depth 1
  const traverse = function(root, d) {
    // if current root is null
    if (!root) {
      // if current depth is greater than counter
      // counter = current depth
      depth = Math.max(depth, d);
      // return depth
      return;
    }
    // helper(root.left)
    traverse(root.left, d + 1);
    // helper(root.right)
    traverse(root.right, d + 1);
  }
  // run helper
  traverse(root, 0);
  // return depth countr
  return depth;
};