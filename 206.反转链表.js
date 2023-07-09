/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
 *
 * https://leetcode.cn/problems/reverse-linked-list/description/
 *
 * algorithms
 * Easy (73.51%)
 * Likes:    3209
 * Dislikes: 0
 * Total Accepted:    1.5M
 * Total Submissions: 2.1M
 * Testcase Example:  '[1,2,3,4,5]'
 *
 * 给你单链表的头节点 head ，请你反转链表，并返回反转后的链表。
 *
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：head = [1,2,3,4,5]
 * 输出：[5,4,3,2,1]
 *
 *
 * 示例 2：
 *
 *
 * 输入：head = [1,2]
 * 输出：[2,1]
 *
 *
 * 示例 3：
 *
 *
 * 输入：head = []
 * 输出：[]
 *
 *
 *
 *
 * 提示：
 *
 *
 * 链表中节点的数目范围是 [0, 5000]
 * -5000
 *
 *
 *
 *
 * 进阶：链表可以选用迭代或递归方式完成反转。你能否用两种方法解决这道题？
 *
 *
 *
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  let prev = null;
  let curr = head;
  while (curr) {
    // 把 next 存下来，以便下次循环
    const next = curr.next;
    // 将当前点的 next 设置为上一个节点
    curr.next = prev;
    // 将上一个点设置为当前点
    prev = curr;
    // 将当前点设置为 next
    curr = next;
  }
  return prev;
};

// 方法二最好是画个图，就好理解了
var reverseList2 = function (head) {
  if (!head || !head.next) {
    return head;
  }
  const result = reverseList2(head.next);
  // 将下一个节点的 next 指向自己
  head.next.next = head;
  // 将 next 设置为 null，避免环
  head.next = null;
  return result;
};
// @lc code=end
