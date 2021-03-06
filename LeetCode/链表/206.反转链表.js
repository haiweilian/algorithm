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

function print(head) {
  let cur = head
  let link = []
  while (cur) {
    link.push(cur.val)
    cur = cur.next
  }
  return `长度为 ${link.length} : 值为 ${link.join("->")}`
}

console.log(print(reverseList(ListNode))) // 长度为 3 : 值为 3->2->1
