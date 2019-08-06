/*
 * @lc app=leetcode id=111 lang=javascript
 *
 * [111] Minimum Depth of Binary Tree
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
 * @return {number}
 */
var minDepth = function (root) {
  if (root === null) return 0
  const leftDepth = minDepth(root.left)
  const rightDepth = minDepth(root.right)
  return (leftDepth === 0 || rightDepth === 0) ? (leftDepth + rightDepth) + 1 : Math.min(leftDepth, rightDepth) + 1
};

