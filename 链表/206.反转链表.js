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

// 思路：让当前节点的指针指向上一个节点

var reverseList = function (head) {
  let cur = head
  let pre = null

  while (cur !== null) {
    // 保存下一个节点
    let next = cur.next
    // 让当前节点的指针指向上一个节点
    cur.next = pre
    // 让当前节点变为上一个节点
    pre = cur
    // 重置当前节点
    cur = next
  }

  // 解构赋值
  // while (cur !== null) {
  //   ;[cur.next, pre, cur] = [pre, cur, cur.next]
  // }

  return pre
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

// {"val":1,"next":null} {"val":2,"next":{"val":3,"next":null}}
// {"val":2,"next":{"val":1,"next":null}} {"val":3,"next":null}
// {"val":3,"next":{"val":2,"next":{"val":1,"next":null}}} null

reverseList(ListNode, 2)
console.log(ListNode)
