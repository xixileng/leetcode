/*
 * @lc app=leetcode id=32 lang=javascript
 *
 * [32] Longest Valid Parentheses
 *
 * https://leetcode.com/problems/longest-valid-parentheses/description/
 *
 * algorithms
 * Hard (25.95%)
 * Likes:    2099
 * Dislikes: 96
 * Total Accepted:    205.7K
 * Total Submissions: 790.9K
 * Testcase Example:  '"(()"'
 *
 * Given a string containing just the characters '(' and ')', find the length
 * of the longest valid (well-formed) parentheses substring.
 * 
 * Example 1:
 * 
 * 
 * Input: "(()"
 * Output: 2
 * Explanation: The longest valid parentheses substring is "()"
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: ")()())"
 * Output: 4
 * Explanation: The longest valid parentheses substring is "()()"
 * 
 * 
 */
/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function (s) {
  if (s === '') return 0
  const stack = [-1]
  let max = 0
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      stack.push(i)
    } else {
      stack.pop()
      if (stack.length === 0) {
        stack.push(i)
      } else {
        max = Math.max(max, i - stack[stack.length - 1])
      }
    }
  }
  return max
};
