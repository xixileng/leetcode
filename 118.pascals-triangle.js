/*
 * @lc app=leetcode id=118 lang=javascript
 *
 * [118] Pascal's Triangle
 *
 * https://leetcode.com/problems/pascals-triangle/description/
 *
 * algorithms
 * Easy (47.13%)
 * Likes:    792
 * Dislikes: 80
 * Total Accepted:    272.6K
 * Total Submissions: 578.3K
 * Testcase Example:  '5'
 *
 * Given a non-negative integer numRows, generate the first numRows of Pascal's
 * triangle.
 * 
 * 
 * In Pascal's triangle, each number is the sum of the two numbers directly
 * above it.
 * 
 * Example:
 * 
 * 
 * Input: 5
 * Output:
 * [
 * ⁠    [1],
 * ⁠   [1,1],
 * ⁠  [1,2,1],
 * ⁠ [1,3,3,1],
 * ⁠[1,4,6,4,1]
 * ]
 * 
 * 
 */
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  if (numRows === 0) return []
  const result = [[1]]
  for (let i = 1; i < numRows; i++) {
    const item = []
    const pre = result[i - 1]
    for (let j = 0; j < i + 1; j++) {
      item[j] = (pre[j - 1] || 0) + (pre[j] || 0)
    }
    result.push(item)
  }
  return result
};

