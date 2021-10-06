/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
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
/**
 * @description
 * 1、在遍历链表时，让当前的节点的指针指向上一个节点 1-2-3-4 -> 2-1
 * 2、因为当前节点指向了上一个节点切断了链表的引用，所有还要提前存储当前节点之后的节点
 */
var reverseList = function (head) {
  let pre = null
  let cur = head
  let next = null

  while (cur) {
    // 保存下一个节点
    next = cur.next
    // 让当前节点的指针指向上一个节点
    cur.next = pre
    // 让当前节点变为上一个节点
    pre = cur
    // 重置当前节点
    cur = next
  }

  // 解构赋值，和上面逻辑一样。
  // while (cur) {
  //   ;[cur.next, pre, cur] = [pre, cur, cur.next]
  // }

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
      next: null,
    },
  },
}

let print = require("../../工具类/打印链表")
console.log(print(reverseList(ListNode))) // 长度为 3 : 值为 3->2->1
