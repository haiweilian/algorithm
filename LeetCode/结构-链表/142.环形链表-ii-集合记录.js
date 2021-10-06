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
  // 创建一个集合记录
  let cache = new Set()
  while (head) {
    // 如果已经存在，证明已经遍历过一次了，那么它就是一个环形链表。
    // 这里如果存在其实就是入环的第一个节点
    if (cache.has(head)) {
      return head
    } else {
      cache.add(head)
    }
    head = head.next
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
