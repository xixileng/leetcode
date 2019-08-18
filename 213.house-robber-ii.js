/*
 * @lc app=leetcode id=213 lang=javascript
 *
 * [213] House Robber II
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  const length = nums.length
  if (length === 0) return 0
  if (length === 1) return nums[0]
  const optStartFirst = new Array(length)
  const optStartSecond = new Array(length)
  optStartFirst[0] = nums[0]
  optStartFirst[1] = Math.max(nums[0], nums[1])
  optStartSecond[0] = 0
  optStartSecond[1] = nums[1]
  for (let i = 2; i < length; i++) {
    optStartFirst[i] = Math.max(optStartFirst[i - 1], optStartFirst[i - 2] + nums[i])
    optStartSecond[i] = Math.max(optStartSecond[i - 1], optStartSecond[i - 2] + nums[i])
  }
  return Math.max(optStartFirst[length - 2], optStartSecond[length - 1])
};
