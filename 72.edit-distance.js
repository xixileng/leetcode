/*
 * @lc app=leetcode id=72 lang=javascript
 *
 * [72] Edit Distance
 */
/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
  const m = word1.length
  const n = word2.length
  const opt = [...new Array(m + 1)].map(() => new Array(n + 1).fill(0))
  for (let i = 1; i <= m; i++) {
    opt[i][0] = i
  }
  for (let i = 1; i <= n; i++) {
    opt[0][i] = i
  }
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (word1[i - 1] === word2[j - 1]) {
        opt[i][j] = opt[i - 1][j - 1]
      } else {
        opt[i][j] = Math.min(opt[i][j - 1], opt[i - 1][j], opt[i - 1][j - 1]) + 1
      }
    }
  }
  return opt[m][n]
};
