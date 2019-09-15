/*
 * @lc app=leetcode id=44 lang=javascript
 *
 * [44] Wildcard Matching
 */
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
  const sLength = s.length
  const pLength = p.length
  const dp = [...new Array(sLength + 1)].map(item => new Array(pLength + 1).fill(false))
  dp[0][0] = true
  for (let i = 1; i <= pLength; i++) {
    dp[0][i] = dp[0][i - 1] && p[i - 1] === '*'
    if (!dp[0][i]) break
  }
  for (let i = 1; i <= sLength; i++) {
    for (let j = 1; j <= pLength; j++) {
      if (p[j - 1] === '?') {
        dp[i][j] = dp[i - 1][j - 1]
      } else if (p[j - 1] === '*') {
        dp[i][j] = dp[i][j - 1] || dp[i - 1][j]
      } else {
        dp[i][j] = dp[i - 1][j - 1] && s[i - 1] === p[j - 1]
      }
    }
  }
  return dp[sLength][pLength]
};
