/*
 * @lc app=leetcode id=96 lang=javascript
 *
 * [96] Unique Binary Search Trees
 *
 * https://leetcode.com/problems/unique-binary-search-trees/description/
 *
 * algorithms
 * Medium (46.93%)
 * Likes:    1850
 * Dislikes: 71
 * Total Accepted:    209.3K
 * Total Submissions: 445.8K
 * Testcase Example:  '3'
 *
 * Given n, how many structurally unique BST's (binary search trees) that store
 * values 1 ... n?
 *
 * Example:
 *
 *
 * Input: 3
 * Output: 5
 * Explanation:
 * Given n = 3, there are a total of 5 unique BST's:
 *
 * ⁠  1         3     3      2      1
 * ⁠   \       /     /      / \      \
 * ⁠    3     2     1      1   3      2
 * ⁠   /     /       \                 \
 * ⁠  2     1         2                 3
 *
 *
 */
/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function (n) {
  const g = new Array(n + 1).fill(0)
  g[0] = 1
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      g[i] += g[j - 1] * g[i - j]
    }
  }
  return g[n]
};

