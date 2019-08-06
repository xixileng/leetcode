/*
 * @lc app=leetcode id=109 lang=javascript
 *
 * [109] Convert Sorted List to Binary Search Tree
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function (head) {
  if (head === null) return null
  let slow = head
  let fast = head
  let pre = null
  while (fast !== null && fast.next !== null) {
    pre = slow
    slow = slow.next
    fast = fast.next.next
  }
  const node = new TreeNode(slow.val)
  if (pre !== null) {
    pre.next = null
  } else {
    head = null
  }
  node.left = sortedListToBST(head)
  node.right = sortedListToBST(slow.next)
  return node
};

