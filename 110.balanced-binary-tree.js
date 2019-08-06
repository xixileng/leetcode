/*
 * @lc app=leetcode id=110 lang=javascript
 *
 * [110] Balanced Binary Tree
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
 * @return {boolean}
 */
var isBalanced = function (root) {
  return dfs(root) !== -1
};

function dfs (node) {
  if (node === null) {
    return 0
  }
  const leftDepth = dfs(node.left)
  if (leftDepth === -1) {
    return -1
  }
  const rightDepth = dfs(node.right)
  if (rightDepth === -1) {
    return -1
  }
  if (Math.abs(leftDepth - rightDepth) > 1) {
    return -1
  }
  return Math.max(leftDepth, rightDepth) + 1
}

