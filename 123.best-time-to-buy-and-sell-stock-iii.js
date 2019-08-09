/*
 * @lc app=leetcode id=123 lang=javascript
 *
 * [123] Best Time to Buy and Sell Stock III
 */
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  const length = prices.length
  if (length === 0 || length === 1) return 0
  const opt = new Array(3).fill(0).map(() => new Array(length).fill(0))
  for (let i = 1; i <= 2; i++) {
    let min = prices[0]
    for (let j = 1; j < length; j++) {
      min = Math.min(min, prices[j] - opt[i - 1][j - 1]);
      const A = prices[j] - min
      const B = opt[i][j - 1]
      opt[i][j] = Math.max(A, B)
    }
  }
  return opt[2][prices.length - 1]
};
