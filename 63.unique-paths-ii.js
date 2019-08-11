/*
 * @lc app=leetcode id=63 lang=javascript
 *
 * [63] Unique Paths II
 *
 * https://leetcode.com/problems/unique-paths-ii/description/
 *
 * algorithms
 * Medium (33.59%)
 * Likes:    942
 * Dislikes: 152
 * Total Accepted:    215.2K
 * Total Submissions: 640.4K
 * Testcase Example:  '[[0,0,0],[0,1,0],[0,0,0]]'
 *
 * A robot is located at the top-left corner of a m x n grid (marked 'Start' in
 * the diagram below).
 * 
 * The robot can only move either down or right at any point in time. The robot
 * is trying to reach the bottom-right corner of the grid (marked 'Finish' in
 * the diagram below).
 * 
 * Now consider if some obstacles are added to the grids. How many unique paths
 * would there be?
 * 
 * 
 * 
 * An obstacle and empty space is marked as 1 and 0 respectively in the grid.
 * 
 * Note: m and n will be at most 100.
 * 
 * Example 1:
 * 
 * 
 * Input:
 * [
 * [0,0,0],
 * [0,1,0],
 * [0,0,0]
 * ]
 * Output: 2
 * Explanation:
 * There is one obstacle in the middle of the 3x3 grid above.
 * There are two ways to reach the bottom-right corner:
 * 1. Right -> Right -> Down -> Down
 * 2. Down -> Down -> Right -> Right
 * 
 * 
 */
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
  if (obstacleGrid.length === 0) return 0
  const m = obstacleGrid.length
  const n = obstacleGrid[0].length
  const opt = [...new Array(m)].map(() => new Array(n).fill(0))
  opt[0][0] = obstacleGrid[0][0] === 0
  for (let i = 1; i < m; i++) {
    opt[i][0] = Number(opt[i - 1][0] && obstacleGrid[i][0] === 0)
  }
  for (let i = 1; i < n; i++) {
    opt[0][i] = Number(opt[0][i - 1] && obstacleGrid[0][i] === 0)
  }
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      if (obstacleGrid[i][j] === 0) {
        opt[i][j] = opt[i][j - 1] + opt[i - 1][j]
      }
    }
  }
  return opt[m - 1][n - 1]
};
