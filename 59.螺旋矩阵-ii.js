/*
 * @lc app=leetcode.cn id=59 lang=javascript
 *
 * [59] 螺旋矩阵 II
 *
 * https://leetcode.cn/problems/spiral-matrix-ii/description/
 *
 * algorithms
 * Medium (72.83%)
 * Likes:    1079
 * Dislikes: 0
 * Total Accepted:    328.9K
 * Total Submissions: 452.2K
 * Testcase Example:  '3'
 *
 * 给你一个正整数 n ，生成一个包含 1 到 n^2 所有元素，且元素按顺时针顺序螺旋排列的 n x n 正方形矩阵 matrix 。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：n = 3
 * 输出：[[1,2,3],[8,9,4],[7,6,5]]
 *
 *
 * 示例 2：
 *
 *
 * 输入：n = 1
 * 输出：[[1]]
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1
 *
 *
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
  // 初始化二维数组
  const result = new Array(n).fill(0).map(() => new Array(n));

  // 初始化边界
  let start = 0;
  let end = n - 1;
  let i = 1;

  while (i < n ** 2) {
    // 从左往右
    for (let index = start; index < end; index++) {
      result[start][index] = i;
      i++;
    }

    // 从上往下
    for (let index = start; index < end; index++) {
      result[index][end] = i;
      i++;
    }

    // 从右往左
    for (let index = end; index > start; index--) {
      result[end][index] = i;
      i++;
    }

    // 从下往上
    for (let index = end; index > start; index--) {
      result[index][start] = i;
      i++;
    }

    // 每绕一圈，边界向内靠一次
    start += 1;
    end -= 1;
  }

  // 奇数的时候自己补中心
  if (n % 2 === 1) {
    const center = Math.floor(n / 2);
    result[center][center] = n ** 2;
  }

  return result;
};
// @lc code=end
