/*
 * @lc app=leetcode id=94 lang=javascript
 *
 * [94] Binary Tree Inorder Traversal
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */


var inorderTraversal = function (root) {
  const result = []
  const stack = []
  let curr = root
  while (curr !== null || stack.length > 0) {
    while (curr !== null) {
      stack.push(curr)
      curr = curr.left
    }
    curr = stack.pop()
    result.push(curr.val)
    curr = curr.right
  }
  return result
};

