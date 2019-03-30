/*
 * @lc app=leetcode id=14 lang=javascript
 *
 * [14] Longest Common Prefix
 *
 * https://leetcode.com/problems/longest-common-prefix/description/
 *
 * algorithms
 * Easy (33.09%)
 * Total Accepted:    421K
 * Total Submissions: 1.3M
 * Testcase Example:  '["flower","flow","flight"]'
 *
 * Write a function to find the longest common prefix string amongst an array
 * of strings.
 *
 * If there is no common prefix, return an empty string "".
 *
 * Example 1:
 *
 *
 * Input: ["flower","flow","flight"]
 * Output: "fl"
 *
 *
 * Example 2:
 *
 *
 * Input: ["dog","racecar","car"]
 * Output: ""
 * Explanation: There is no common prefix among the input strings.
 *
 *
 * Note:
 *
 * All given inputs are in lowercase letters a-z.
 *
 */
/**
 * @param {string[]} strs
 * @return {string}
 */
function findCommon (str1, str2) {
  if (str1 === str2) {
    return str1;
  }

  let _str1 = str1.slice(1), _str2 = str2.slice(1);
  return str1[0] === str2[0] ? str1[0] += findCommon(_str1, _str2) : '';
}

var longestCommonPrefix = function (strs) {
  if (strs.length === 0) return '';

  let str = strs[0];

  for (let i = 1; i < strs.length; i++) {
    str = findCommon(str, strs[i]);
  }

  return str;
};

