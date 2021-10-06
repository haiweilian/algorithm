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
 * 1、使用集合记录已经遍历过的节点，如果再次遍历到那么它就是一个环形链表
 */
var hasCycle = function (head) {
  // 创建一个集合记录
  let cache = new Set()
  while (head) {
    // 如果已经存在，证明已经遍历过一次了，那么它就是一个环形链表。
    if (cache.has(head)) {
      return true
    } else {
      cache.add(head)
    }
    head = head.next
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
