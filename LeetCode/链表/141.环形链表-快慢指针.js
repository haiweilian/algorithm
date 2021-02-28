/*
 * @lc app=leetcode.cn id=141 lang=javascript
 *
 * [141] 环形链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */

// 思路： 快慢指针->
// **只要是一个圆**，如操场跑步，一个人跑的快(fast)、一个人跑的慢(slow)，迟早跑的快的会追上跑的慢的(多跑了一圈)。
// **如果不是一个圆**，那么跑的快的就会先到达终点。
// 空间复杂度 O(1)
var hasCycle = function (head) {
  let fast = head
  let slow = head
  while (fast && fast.next) {
    fast = fast.next.next // 快的跑两步
    slow = slow.next // 慢的跑一步
    if (fast === slow) {
      // 如果快的追上了慢的，那么它就是一个圆
      return true
    }
  }
  return false
}
// @lc code=end

let ListNode = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: null,
    },
  },
}
// 构建一个环形链表
ListNode.next.next.next = ListNode

console.log(hasCycle(ListNode))
