/*
 * @lc app=leetcode id=188 lang=javascript
 *
 * [188] Best Time to Buy and Sell Stock IV
 */
/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */

var maxProfit = function (k, prices) {
  const length = prices.length
  if (k === 0) return 0
  if (k > length / 2) {
    return maxProfitKMax(prices)
  }
  const opt = new Array(k + 1).fill(0).map(() => new Array(length).fill(0))
  for (let i = 1; i <= k; i++) {
    let min = prices[0]
    for (let j = 1; j < length; j++) {
      min = Math.min(min, prices[j] - opt[i - 1][j - 1]);
      const A = prices[j] - min
      const B = opt[i][j - 1]
      opt[i][j] = Math.max(A, B)
    }
  }
  return opt[k][prices.length - 1]
}

var maxProfitKMax = function (prices) {
  let result = 0
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] > prices[i - 1]) {
      result += prices[i] - prices[i - 1]
    }
  }
  return result
}
