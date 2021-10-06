/*
 * @lc app=leetcode.cn id=61 lang=javascript
 *
 * [61] 旋转链表
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
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
  if (!head || !head.next || !k) return head

  let pre = head
  let size = 1

  // 获取链表的长度
  while (pre.next) {
    pre = pre.next
    size++
  }

  // 让链表的末位节点指向头节点构成一个环。
  // 这里的引用关系：因为最后的 pre.next 是对 head 最后一个的引用，所以现在 head 现在是一个从头开始的环。
  pre.next = head

  // 顺时针旋转，所以要算出走几步才能到达新的头节点。
  // 当 K 比链表长度数值要大时，K 要对链表长度取余。因为当 K 是旋转链表长度的整数倍时，它和未旋转是一样的。
  let length = size - (k % size) - 1
  for (let i = 0; i < length; i++) {
    head = head.next
  }

  // 保存新的头节点 => 4.next = 5
  pre = head.next

  // 断开头节点和上个节点的环 => 4 和 5 断开
  head.next = null

  return pre
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
console.log(print(rotateRight(ListNode, 1))) // 长度为 5 : 值为 5->1->2->3->4
