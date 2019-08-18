/*
 * @lc app=leetcode id=198 lang=javascript
 *
 * [198] House Robber
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  const length = nums.length
  if (length === 0) return 0
  const opt = new Array(length)
  opt[0] = nums[0]
  opt[1] = Math.max(nums[0], nums[1])
  for (let i = 2; i < length; i++) {
    opt[i] = Math.max(opt[i - 1], opt[i - 2] + nums[i])
  }
  return opt[length - 1]
};
