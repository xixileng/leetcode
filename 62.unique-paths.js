/*
 * @lc app=leetcode id=62 lang=javascript
 *
 * [62] Unique Paths
 *
 * https://leetcode.com/problems/unique-paths/description/
 *
 * algorithms
 * Medium (48.47%)
 * Likes:    1777
 * Dislikes: 123
 * Total Accepted:    314.8K
 * Total Submissions: 648K
 * Testcase Example:  '3\n2'
 *
 * A robot is located at the top-left corner of a m x n grid (marked 'Start' in
 * the diagram below).
 * 
 * The robot can only move either down or right at any point in time. The robot
 * is trying to reach the bottom-right corner of the grid (marked 'Finish' in
 * the diagram below).
 * 
 * How many possible unique paths are there?
 * 
 * 
 * Above is a 7 x 3 grid. How many possible unique paths are there?
 * 
 * Note: m and n will be at most 100.
 * 
 * Example 1:
 * 
 * 
 * Input: m = 3, n = 2
 * Output: 3
 * Explanation:
 * From the top-left corner, there are a total of 3 ways to reach the
 * bottom-right corner:
 * 1. Right -> Right -> Down
 * 2. Right -> Down -> Right
 * 3. Down -> Right -> Right
 * 
 *
 * Example 2:
 * 
 * 
 * Input: m = 7, n = 3
 * Output: 28
 * 
 */
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
  if (m === 0 || n === 0) return 0
  const opt = [...new Array(m)].map(() => new Array(n).fill(1))
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      opt[i][j] = opt[i - 1][j] + opt[i][j - 1]
    }
  }
  return opt[m - 1][n - 1]
};
