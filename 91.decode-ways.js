/*
 * @lc app=leetcode id=91 lang=javascript
 *
 * [91] Decode Ways
 */
/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function (s) {
  if (s === '' || s[0] === '0') return 0
  let _pre = 1
  let pre = Number(s[0] !== 0)
  let cur = 0
  for (let i = 1; i < s.length; i++) {
    if (s[i] !== '0') {
      cur = pre
    }
    const two = s[i - 1] + s[i]
    if (two >= 10 && two <= 26) {
      cur += _pre
    }
    [_pre, pre, cur] = [pre, cur, 0]
  }
  return pre
};

