/*
 * @lc app=leetcode.cn id=54 lang=javascript
 *
 * [54] 螺旋矩阵
 *
 * https://leetcode.cn/problems/spiral-matrix/description/
 *
 * algorithms
 * Medium (49.33%)
 * Likes:    1414
 * Dislikes: 0
 * Total Accepted:    379.4K
 * Total Submissions: 769K
 * Testcase Example:  '[[1,2,3],[4,5,6],[7,8,9]]'
 *
 * 给你一个 m 行 n 列的矩阵 matrix ，请按照 顺时针螺旋顺序 ，返回矩阵中的所有元素。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：matrix = [[1,2,3],[4,5,6],[7,8,9]]
 * 输出：[1,2,3,6,9,8,7,4,5]
 *
 *
 * 示例 2：
 *
 *
 * 输入：matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
 * 输出：[1,2,3,4,8,12,11,10,9,5,6,7]
 *
 *
 *
 *
 * 提示：
 *
 *
 * m == matrix.length
 * n == matrix[i].length
 * 1
 * -100
 *
 *
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  const result = [];
  if (matrix == null || matrix.length == 0) return result;

  let left = 0;
  let right = matrix[0].length - 1;
  let top = 0;
  let bottom = matrix.length - 1;
  let num = matrix.length * matrix[0].length;

  while (num >= 1) {
    // 从左往右
    for (let index = left; index < right && num >= 1; index++) {
      result.push(matrix[top][index]);
      num--;
    }

    // 从上往下
    for (let index = top; index < bottom && num >= 1; index++) {
      result.push(matrix[index][right]);
      num--;
    }

    // 从右往左
    for (let index = right; index > left && num >= 1; index--) {
      result.push(matrix[bottom][index]);
      num--;
    }

    // 从下往上
    for (let index = bottom; index > top && num >= 1; index--) {
      result.push(matrix[index][left]);
      num--;
    }

    // 每绕一圈，边界向内靠一次
    left += 1;
    top += 1;
    right -= 1;
    bottom -= 1;

    // 左闭右开，留下一个时手动补齐
    if (num === 1) {
      if (bottom === -1) bottom = 0;
      if (right === -1) right = 0;
      result.push(matrix[bottom][right]);
      num--;
    }
  }
  return result;
};
// @lc code=end
