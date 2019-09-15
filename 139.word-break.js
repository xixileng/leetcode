/*
 * @lc app=leetcode id=139 lang=javascript
 *
 * [139] Word Break
 */
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
  const dp = new Array(s.length + 1).fill(false);
  dp[0] = true
  for (let i = 1; i <= s.length; i++) {
    for (const word of wordDict) {
      if (word.length <= i) {
        if (dp[i - word.length] && s.slice(i - word.length, i) === word) {
          dp[i] = true;
          break;
        }
      }
    }
  }
  return dp[s.length]
};
