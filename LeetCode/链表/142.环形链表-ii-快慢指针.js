/*
 * @lc app=leetcode.cn id=142 lang=javascript
 *
 * [142] 环形链表 II
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
 * @return {ListNode}
 */
var detectCycle = function (head) {
  let fast = head
  let slow = head
  let start = head
  // 如果快的到达终点，那么它不是一个环形链表。
  while (fast && fast.next) {
    // 快的跑两步
    fast = fast.next.next
    // 慢的跑一步
    slow = slow.next
    // 如果快的追上了慢的，那么它就是一个环形链表。
    if (fast === slow) {
      while (slow && start) {
        // 如果新开始的和慢的相遇时就是入环点
        if (slow === start) {
          return slow
        }
        slow = slow.next
        start = start.next
      }
    }
  }
  return null
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

let node = detectCycle(ListNode)
console.log(node && node.val) // 2
