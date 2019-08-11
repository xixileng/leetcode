/*
 * @lc app=leetcode id=64 lang=javascript
 *
 * [64] Minimum Path Sum
 *
 * https://leetcode.com/problems/minimum-path-sum/description/
 *
 * algorithms
 * Medium (47.90%)
 * Likes:    1528
 * Dislikes: 42
 * Total Accepted:    249.6K
 * Total Submissions: 519.9K
 * Testcase Example:  '[[1,3,1],[1,5,1],[4,2,1]]'
 *
 * Given a m x n grid filled with non-negative numbers, find a path from top
 * left to bottom right which minimizes the sum of all numbers along its path.
 * 
 * Note: You can only move either down or right at any point in time.
 * 
 * Example:
 * 
 * 
 * Input:
 * [
 * [1,3,1],
 * ⁠ [1,5,1],
 * ⁠ [4,2,1]
 * ]
 * Output: 7
 * Explanation: Because the path 1→3→1→1→1 minimizes the sum.
 * 
 * 
 */
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
  if (grid.length === 0) return 0
  const m = grid.length
  const n = grid[0].length
  const opt = [...new Array(m)].map(() => new Array(n).fill(0))
  opt[0][0] = grid[0][0]
  for (let i = 1; i < m; i++) {
    opt[i][0] = opt[i - 1][0] + grid[i][0]
  }
  for (let i = 1; i < n; i++) {
    opt[0][i] = opt[0][i - 1] + grid[0][i]
  }
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      opt[i][j] = Math.min(opt[i][j - 1], opt[i - 1][j]) + grid[i][j]
    }
  }
  return opt[m - 1][n - 1]
};
