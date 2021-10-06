/*
 * @lc app=leetcode.cn id=86 lang=javascript
 *
 * [86] 分隔链表
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
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {
  // 定义两个链表，小的往 small 后面添加，大的往 large 后面添加，最后再拼接在一起。
  let small = { next: head }
  let large = { next: head }
  let smallHead = small
  let largeHead = large
  let cur = head

  while (cur) {
    if (cur.val < x) {
      // 保存最后一个节点的指针引用
      small.next = cur
      small = small.next
    } else {
      // 保存最后一个节点的指针引用
      large.next = cur
      large = large.next
    }
    cur = cur.next
  }

  // 头尾拼接
  large.next = null
  small.next = largeHead.next

  return smallHead.next
}
// @lc code=end

// ===================================================================
// ========================== @test ==================================
// ===================================================================
let ListNode = {
  val: 5,
  next: {
    val: 1,
    next: {
      val: 3,
      next: {
        val: 6,
        next: {
          val: 2,
          next: null,
        },
      },
    },
  },
}

let print = require("../../工具类/打印链表")
console.log(print(partition(ListNode, 4))) // 长度为 5 : 值为 1->3->2->5->6
