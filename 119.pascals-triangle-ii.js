/*
 * @lc app=leetcode id=119 lang=javascript
 *
 * [119] Pascal's Triangle II
 *
 * https://leetcode.com/problems/pascals-triangle-ii/description/
 *
 * algorithms
 * Easy (44.59%)
 * Likes:    528
 * Dislikes: 173
 * Total Accepted:    216.6K
 * Total Submissions: 485.8K
 * Testcase Example:  '3'
 *
 * Given a non-negative index k where k ≤ 33, return the k^th index row of the
 * Pascal's triangle.
 * 
 * Note that the row index starts from 0.
 * 
 * 
 * In Pascal's triangle, each number is the sum of the two numbers directly
 * above it.
 * 
 * Example:
 * 
 * 
 * Input: 3
 * Output: [1,3,3,1]
 * 
 * 
 * Follow up:
 * 
 * Could you optimize your algorithm to use only O(k) extra space?
 * 
 */
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
  const result = new Array(rowIndex + 1).fill(0)
  result[0] = 1
  for (let i = 1; i < rowIndex + 1; i++) {
    for (let j = i; j > 0; j--) {
      result[j] += result[j - 1]
    }
  }
  return result
};

