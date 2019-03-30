/*
 * @lc app=leetcode id=4 lang=javascript
 *
 * [4] Median of Two Sorted Arrays
 *
 * https://leetcode.com/problems/median-of-two-sorted-arrays/description/
 *
 * algorithms
 * Hard (25.69%)
 * Total Accepted:    402.4K
 * Total Submissions: 1.6M
 * Testcase Example:  '[1,3]\n[2]'
 *
 * There are two sorted arrays nums1 and nums2 of size m and n respectively.
 *
 * Find the median of the two sorted arrays. The overall run time complexity
 * should be O(log (m+n)).
 *
 * You may assume nums1 and nums2 cannot be both empty.
 *
 * Example 1:
 *
 *
 * nums1 = [1, 3]
 * nums2 = [2]
 *
 * The median is 2.0
 *
 *
 * Example 2:
 *
 *
 * nums1 = [1, 2]
 * nums2 = [3, 4]
 *
 * The median is (2 + 3)/2 = 2.5
 *
 *
 */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  if (nums1.length === 0) nums1.push(nums2.shift());
  while (nums2.length > 0) {
    let num2 = nums2.shift();
    for (let i = 0, length = nums1.length; i < length; i++) {
      if (nums1[i] >= num2) {
        nums1.splice(i, 0, num2);
        break;
      }
      if (i === length - 1) {
        nums1.push(num2);
      }
    }

  };
  let length = nums1.length;
  return length % 2 === 0 ? (nums1[length / 2] + nums1[length / 2 - 1]) / 2 : nums1[(length - 1) / 2];
};

