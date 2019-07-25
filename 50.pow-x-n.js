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
  if (n === 0) return 1;
  let result = x;
  n--;
  if (n >= 1) {
    while (n--) {
      result *= x;
    }
  } else if (n < 0) {
    n = -n;
    while (n--) {
      result *= x;
    }
    result = 1 / result;
  }
  return result;
};

