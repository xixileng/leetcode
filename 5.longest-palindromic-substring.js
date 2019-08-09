/*
 * @lc app=leetcode id=5 lang=javascript
 *
 * [5] Longest Palindromic Substring
 */
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  const length = s.length
  if (length <= 1) return s
  const opt = new Array(length).fill(0).map(() => new Array(length).fill(false))
  let max = 0
  let result = ''
  for (let i = length - 1; i >= 0; i--) {
    for (let j = i; j < length; j++) {
      opt[i][j] = s[j] === s[i] && (j - i < 3 || opt[i + 1][j - 1])
      if (opt[i][j]) {
        if (j - i >= max) {
          max = j - i
          result = s.slice(i, j + 1)
        }
      }
    }
  }
  return result
};
