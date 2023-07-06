/*
 * @lc app=leetcode.cn id=977 lang=javascript
 *
 * [977] 有序数组的平方
 *
 * https://leetcode.cn/problems/squares-of-a-sorted-array/description/
 *
 * algorithms
 * Easy (67.98%)
 * Likes:    827
 * Dislikes: 0
 * Total Accepted:    547.6K
 * Total Submissions: 805.8K
 * Testcase Example:  '[-4,-1,0,3,10]'
 *
 * 给你一个按 非递减顺序 排序的整数数组 nums，返回 每个数字的平方 组成的新数组，要求也按 非递减顺序 排序。
 *
 *
 *
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：nums = [-4,-1,0,3,10]
 * 输出：[0,1,9,16,100]
 * 解释：平方后，数组变为 [16,1,0,9,100]
 * 排序后，数组变为 [0,1,9,16,100]
 *
 * 示例 2：
 *
 *
 * 输入：nums = [-7,-3,2,3,11]
 * 输出：[4,9,9,49,121]
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1 10^4
 * -10^4
 * nums 已按 非递减顺序 排序
 *
 *
 *
 *
 * 进阶：
 *
 *
 * 请你设计时间复杂度为 O(n) 的算法解决本问题
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 * 思路：平方后新数组的最大值一定是在原数组的两侧
 */
var sortedSquares = function (nums) {
  let left = 0;
  let right = nums.length - 1;
  let index = nums.length - 1;
  const result = new Array(nums.length);
  while (left <= right) {
    const squareLeft = nums[left] ** 2;
    const squareRight = nums[right] ** 2;
    if (squareLeft > squareRight) {
      result[index] = squareLeft;
      left++;
    } else {
      result[index] = squareRight;
      right--;
    }
    index--;
  }
  return result;
};
// @lc code=end
