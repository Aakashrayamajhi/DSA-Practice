class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function buildTree(arr, i = 0) {
  if (i >= arr.length || arr[i] === null) return null;

  let root = new TreeNode(arr[i]);

  root.left = buildTree(arr, 2 * i + 1);
  root.right = buildTree(arr, 2 * i + 2);

  return root;
}

// Example
let root = buildTree([1,2,3,4,5,6,7]);
console.log(root);