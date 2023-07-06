/*
 * @lc app=leetcode.cn id=209 lang=javascript
 *
 * [209] 长度最小的子数组
 *
 * https://leetcode.cn/problems/minimum-size-subarray-sum/description/
 *
 * algorithms
 * Medium (46.76%)
 * Likes:    1751
 * Dislikes: 0
 * Total Accepted:    562.4K
 * Total Submissions: 1.2M
 * Testcase Example:  '7\n[2,3,1,2,4,3]'
 *
 * 给定一个含有 n 个正整数的数组和一个正整数 target 。
 *
 * 找出该数组中满足其和 ≥ target 的长度最小的 连续子数组 [numsl, numsl+1, ..., numsr-1, numsr]
 * ，并返回其长度。如果不存在符合条件的子数组，返回 0 。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：target = 7, nums = [2,3,1,2,4,3]
 * 输出：2
 * 解释：子数组 [4,3] 是该条件下的长度最小的子数组。
 *
 *
 * 示例 2：
 *
 *
 * 输入：target = 4, nums = [1,4,4]
 * 输出：1
 *
 *
 * 示例 3：
 *
 *
 * 输入：target = 11, nums = [1,1,1,1,1,1,1,1]
 * 输出：0
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1
 * 1
 * 1
 *
 *
 *
 *
 * 进阶：
 *
 *
 * 如果你已经实现 O(n) 时间复杂度的解法, 请尝试设计一个 O(n log(n)) 时间复杂度的解法。
 *
 *
 */

// @lc code=start
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 * 思路：滑动窗口，快指针累加，满足条件后慢指针累减到不满足条件，每次取最小长度
 */
var minSubArrayLen = function (target, nums) {
  let fastIndex = 0;
  let slowIndex = 0;
  let sum = 0;
  let result = Number.MAX_SAFE_INTEGER;
  for (; fastIndex < nums.length; fastIndex++) {
    sum += nums[fastIndex];
    while (sum >= target) {
      result = Math.min(result, fastIndex - slowIndex + 1);
      sum -= nums[slowIndex];
      slowIndex++;
    }
  }
  return result === Number.MAX_SAFE_INTEGER ? 0 : result;
};
// @lc code=end
