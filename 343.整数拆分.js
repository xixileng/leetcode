/*
 * @lc app=leetcode.cn id=343 lang=javascript
 *
 * [343] 整数拆分
 *
 * https://leetcode.cn/problems/integer-break/description/
 *
 * algorithms
 * Medium (62.19%)
 * Likes:    1218
 * Dislikes: 0
 * Total Accepted:    264.7K
 * Total Submissions: 425.6K
 * Testcase Example:  '2'
 *
 * 给定一个正整数 n ，将其拆分为 k 个 正整数 的和（ k >= 2 ），并使这些整数的乘积最大化。
 *
 * 返回 你可以获得的最大乘积 。
 *
 *
 *
 * 示例 1:
 *
 *
 * 输入: n = 2
 * 输出: 1
 * 解释: 2 = 1 + 1, 1 × 1 = 1。
 *
 * 示例 2:
 *
 *
 * 输入: n = 10
 * 输出: 36
 * 解释: 10 = 3 + 3 + 4, 3 × 3 × 4 = 36。
 *
 *
 *
 * 提示:
 *
 *
 * 2 <= n <= 58
 *
 *
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function (n) {
  // dp[i] 为拆分 i 时最大的乘积值，要输出 dp[n]，数组就要加 1
  let dp = new Array(n + 1).fill(0);
  dp[2] = 1;

  for (let i = 3; i <= n; i++) {
    for (let j = 1; j < i - 1; j++) {
      // 在推导过的 dp[i]、拆 j * dp[i - j]、j * (i - j) 中取最大的值
      dp[i] = Math.max(dp[i], dp[i - j] * j, (i - j) * j);
    }
  }
  return dp[n];
};
// @lc code=end
