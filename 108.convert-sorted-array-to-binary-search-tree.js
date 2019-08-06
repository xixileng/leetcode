/*
 * @lc app=leetcode id=108 lang=javascript
 *
 * [108] Convert Sorted Array to Binary Search Tree
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
  return toBST(nums, 0, nums.length - 1)
};

function toBST (nums, left, right) {
  if (left > right) return null
  const middle = Math.floor((left + right + 1) / 2)
  const node = new TreeNode(nums[middle])
  node.left = toBST(nums, left, middle - 1)
  node.right = toBST(nums, middle + 1, right)
  return node
}

