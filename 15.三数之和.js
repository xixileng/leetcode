/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 *
 * https://leetcode.cn/problems/3sum/description/
 *
 * algorithms
 * Medium (37.03%)
 * Likes:    6032
 * Dislikes: 0
 * Total Accepted:    1.4M
 * Total Submissions: 3.8M
 * Testcase Example:  '[-1,0,1,2,-1,-4]'
 *
 * 给你一个整数数组 nums ，判断是否存在三元组 [nums[i], nums[j], nums[k]] 满足 i != j、i != k 且 j !=
 * k ，同时还满足 nums[i] + nums[j] + nums[k] == 0 。请
 *
 * 你返回所有和为 0 且不重复的三元组。
 *
 * 注意：答案中不可以包含重复的三元组。
 *
 *
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：nums = [-1,0,1,2,-1,-4]
 * 输出：[[-1,-1,2],[-1,0,1]]
 * 解释：
 * nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0 。
 * nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0 。
 * nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0 。
 * 不同的三元组是 [-1,0,1] 和 [-1,-1,2] 。
 * 注意，输出的顺序和三元组的顺序并不重要。
 *
 *
 * 示例 2：
 *
 *
 * 输入：nums = [0,1,1]
 * 输出：[]
 * 解释：唯一可能的三元组和不为 0 。
 *
 *
 * 示例 3：
 *
 *
 * 输入：nums = [0,0,0]
 * 输出：[[0,0,0]]
 * 解释：唯一可能的三元组和为 0 。
 *
 *
 *
 *
 * 提示：
 *
 *
 * 3 <= nums.length <= 3000
 * -10^5 <= nums[i] <= 10^5
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 * 思路：
 */
var threeSum = function (nums) {
  nums.sort((a, b) => a - b);
  if (nums.length < 3 || nums[0] > 0) return [];

  const result = [];
  for (let index = 0; index < nums.length; index++) {
    // 数组有序，如果当前数已经 > 0，则不会再有结果了
    if (nums[index] > 0) {
      return result;
    }

    if (index > 0 && nums[index] === nums[index - 1]) continue;

    let leftIndex = index + 1;
    let rightIndex = nums.length - 1;
    while (leftIndex < rightIndex) {
      const sum = nums[index] + nums[leftIndex] + nums[rightIndex];
      if (sum === 0) {
        result.push([nums[index], nums[leftIndex], nums[rightIndex]]);
        // 左侧去重
        while (
          leftIndex < rightIndex &&
          nums[leftIndex] === nums[leftIndex + 1]
        ) {
          leftIndex += 1;
        }
        // 右侧去重
        while (
          leftIndex < rightIndex &&
          nums[rightIndex] === nums[rightIndex - 1]
        ) {
          rightIndex -= 1;
        }
        leftIndex += 1;
        rightIndex -= 1;
      } else if (sum > 0) {
        rightIndex -= 1;
      } else {
        leftIndex += 1;
      }
    }
  }
  return result;
};

// @lc code=end
