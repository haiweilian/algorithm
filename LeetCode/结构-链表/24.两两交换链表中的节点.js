/*
 * @lc app=leetcode.cn id=24 lang=javascript
 *
 * [24] 两两交换链表中的节点
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
var swapPairs = function (head) {
  let ret = { next: head }
  let temp = ret

  while (temp.next && temp.next.next) {
    let pre = temp.next
    let cur = temp.next.next

    // 完成一轮交换
    pre.next = cur.next
    cur.next = pre

    temp.next = cur
    temp = pre
  }

  return ret.next
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
      next: {
        val: 4,
        next: {
          val: 5,
          next: null,
        },
      },
    },
  },
}

let print = require("../../工具类/打印链表")
console.log(print(swapPairs(ListNode))) // 长度为 5 : 值为 2->1->4->3->5
