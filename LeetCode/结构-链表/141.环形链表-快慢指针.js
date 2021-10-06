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
/**
 * @description
 * **如果是一个圆，快指针最终都会追上慢指针**
 * 如操场跑步，一个人跑的快(fast)、一个人跑的慢(slow)，迟早跑的快的会追上跑的慢的(多跑了一圈)。
 * 1、首先快的和慢的都是从起点出发的。快的跑两步，慢的跑一步。
 * 2、如果快的会先到达终点，证明不是一个环形。
 * 3、如果两者会再次相遇（节点相等），证明是一个环形。
 */
var hasCycle = function (head) {
  let fast = head
  let slow = head
  // 如果快的到达终点，那么它不是一个环形链表。
  while (fast && fast.next) {
    // 快的跑两步
    fast = fast.next.next
    // 慢的跑一步
    slow = slow.next
    // 如果快的追上了慢的，那么它就是一个环形链表。
    if (fast === slow) {
      return true
    }
  }
  return false
}
// @lc code=end

// ===================================================================
// ========================== @test ==================================
// ===================================================================
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
ListNode.next.next.next = ListNode.next

console.log(hasCycle(ListNode)) // true
