/*
 * @lc app=leetcode.cn id=42 lang=javascript
 *
 * [42] 接雨水
 *
 * https://leetcode.cn/problems/trapping-rain-water/description/
 *
 * algorithms
 * Hard (62.75%)
 * Likes:    4410
 * Dislikes: 0
 * Total Accepted:    702.4K
 * Total Submissions: 1.1M
 * Testcase Example:  '[0,1,0,2,1,0,1,3,2,1,2,1]'
 *
 * 给定 n 个非负整数表示每个宽度为 1 的柱子的高度图，计算按此排列的柱子，下雨之后能接多少雨水。
 *
 *
 *
 * 示例 1：
 *
 *
 *
 *
 * 输入：height = [0,1,0,2,1,0,1,3,2,1,2,1]
 * 输出：6
 * 解释：上面是由数组 [0,1,0,2,1,0,1,3,2,1,2,1] 表示的高度图，在这种情况下，可以接 6 个单位的雨水（蓝色部分表示雨水）。
 *
 *
 * 示例 2：
 *
 *
 * 输入：height = [4,2,0,3,2,5]
 * 输出：9
 *
 *
 *
 *
 * 提示：
 *
 *
 * n == height.length
 * 1 <= n <= 2 * 10^4
 * 0 <= height[i] <= 10^5
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 * 思路：每个点能接的雨水，是左侧最高和右侧最高中的较小值，减去当前点的高度
 */
var trap = function (height) {
  let sum = 0;
  let leftIndex = 0;
  let rightIndex = height.length - 1;
  let leftMax = 0;
  let rightMax = 0;
  while (leftIndex < rightIndex) {
    leftMax = Math.max(leftMax, height[leftIndex]);
    rightMax = Math.max(rightMax, height[rightIndex]);

    /**
     *  左边的 leftMax 是确定的，且左侧的 rightMax 一定大于等于右侧的 rightMax
     *  此时如果 leftMax < rightMax，则 leftIndex 处能接的雨水就是 leftMax - height[leftIndex]
     * */
    if (leftMax < rightMax) {
      sum += leftMax - height[leftIndex];
      leftIndex++;
    } else {
      sum += rightMax - height[rightIndex];
      rightIndex--;
    }
  }
  return sum;
};
// @lc code=end
