/*
 * @lc app=leetcode id=10 lang=javascript
 *
 * [10] Regular Expression Matching
 *
 * https://leetcode.com/problems/regular-expression-matching/description/
 *
 * algorithms
 * Hard (25.50%)
 * Likes:    2880
 * Dislikes: 552
 * Total Accepted:    327.3K
 * Total Submissions: 1.3M
 * Testcase Example:  '"aa"\n"a"'
 *
 * Given an input string (s) and a pattern (p), implement regular expression
 * matching with support for '.' and '*'.
 * 
 * 
 * '.' Matches any single character.
 * '*' Matches zero or more of the preceding element.
 * 
 * 
 * The matching should cover the entire input string (not partial).
 * 
 * Note:
 * 
 * 
 * s could be empty and contains only lowercase letters a-z.
 * p could be empty and contains only lowercase letters a-z, and characters
 * like . or *.
 * 
 * 
 * Example 1:
 * 
 * 
 * Input:
 * s = "aa"
 * p = "a"
 * Output: false
 * Explanation: "a" does not match the entire string "aa".
 * 
 * 
 * Example 2:
 * 
 * 
 * Input:
 * s = "aa"
 * p = "a*"
 * Output: true
 * Explanation: '*' means zero or more of the preceding element, 'a'.
 * Therefore, by repeating 'a' once, it becomes "aa".
 * 
 * 
 * Example 3:
 * 
 * 
 * Input:
 * s = "ab"
 * p = ".*"
 * Output: true
 * Explanation: ".*" means "zero or more (*) of any character (.)".
 * 
 * 
 * Example 4:
 * 
 * 
 * Input:
 * s = "aab"
 * p = "c*a*b"
 * Output: true
 * Explanation: c can be repeated 0 times, a can be repeated 1 time. Therefore,
 * it matches "aab".
 * 
 * 
 * Example 5:
 * 
 * 
 * Input:
 * s = "mississippi"
 * p = "mis*is*p*."
 * Output: false
 * 
 * 
 */
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
  const sLength = s.length
  const pLength = p.length
  const opt = [...new Array(sLength + 1)].map(() => new Array(pLength + 1).fill(false))
  opt[0][0] = true
  for (let i = 0; i <= sLength; i++) {
    for (let j = 1; j <= pLength; j++) {
      if (j > 1 && p[j - 1] === '*') {
        opt[i][j] = opt[i][j - 2] || (i > 0 && (s[i - 1] === p[j - 2] || p[j - 2] === '.') && opt[i - 1][j]);
      } else {
        opt[i][j] = i > 0 && opt[i - 1][j - 1] && (s[i - 1] === p[j - 1] || p[j - 1] === '.');
      }
    }
  }
  return opt[sLength][pLength]
};
