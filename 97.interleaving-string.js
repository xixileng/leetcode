/*
 * @lc app=leetcode id=97 lang=javascript
 *
 * [97] Interleaving String
 */
/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
// var isInterleave = function (s1, s2, s3) {
//   if (s3.length !== s1.length + s2.length) return false
//   if (s3 === s1 + s2) return true
//   if (s3[s3.length - 1] !== s1[s1.length - 1] && s3[s3.length - 1] !== s2[s2.length - 1]) return false
//   let leftIsInterleave = false, rightIsInterleave = false
//   if (s3[s3.length - 1] === s1[s1.length - 1]) {
//     rightIsInterleave = isInterleave(s1.slice(0, s1.length - 1), s2, s3.slice(0, s3.length - 1))
//   }
//   if (s3[s3.length - 1] === s2[s2.length - 1]) {
//     leftIsInterleave = isInterleave(s1, s2.slice(0, s2.length - 1), s3.slice(0, s3.length - 1))
//   }
//   return leftIsInterleave || rightIsInterleave
// };

var isInterleave = function (s1, s2, s3) {
  if (s3.length !== s1.length + s2.length) return false
  const opt = new Array(s1.length + 1).fill(0).map(() => new Array(s2.length + 1).fill(false))
  opt[0][0] = true
  for (let i = 1; i <= s1.length; i++) {
    opt[i][0] = s3[i - 1] === s1[i - 1] && opt[i - 1][0]
  }
  for (let i = 1; i <= s2.length; i++) {
    opt[0][i] = s3[i - 1] === s2[i - 1] && opt[0][i - 1]
  }
  for (let i = 1; i <= s1.length; i++) {
    for (let j = 1; j <= s2.length; j++) {
      opt[i][j] = (opt[i - 1][j] && s1[i - 1] === s3[i + j - 1]) || (opt[i][j - 1] && s2[j - 1] === s3[i + j - 1]);
    }
  }
  return opt[s1.length][s2.length]
}
