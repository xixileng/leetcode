/*
 * @lc app=leetcode id=113 lang=javascript
 *
 * [113] Path Sum II
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
 * @param {number} sum
 * @return {number[][]}
 */
var pathSum = function (root, sum, curr = [], result = []) {
  if (root === null) return []
  curr.push(root.val)
  if (root.left === null && root.right === null && sum === root.val) {
    result.push(curr)
    return result
  }
  pathSum(root.left, sum - root.val, [...curr], result)
  pathSum(root.right, sum - root.val, [...curr], result)
  return result
};

