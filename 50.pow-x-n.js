/*
 * @lc app=leetcode id=50 lang=javascript
 *
 * [50] Pow(x, n)
 */
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
  const isPositive = n > 0
  n = Math.abs(n)
  const result = pow(x, n)
  return isPositive ? result : 1 / result;
};

function pow (x, n) {
  if (n === 0) return 1;

  return n % 2 === 0 ? pow(x * x, n / 2) : x * pow(x * x, ~~(n / 2))
}
