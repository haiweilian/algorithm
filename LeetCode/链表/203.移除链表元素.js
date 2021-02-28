/*
 * @lc app=leetcode.cn id=203 lang=javascript
 *
 * [203] 移除链表元素
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
 * @param {number} val
 * @return {ListNode}
 */

// 思路：多添加一个节点，便于循环第一个，如果当前节点的下一个节点的值 等于 输入值。那就把当前节点的指针指向下一个节点的下一个节点。
var removeElements = function (head, val) {
  let ele = {
    next: head,
  }
  let cur = ele
  while (cur.next) {
    if (cur.next.val === val) {
      cur.next = cur.next.next
    } else {
      cur = cur.next
    }
  }
  return ele.next
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
removeElements(ListNode, 2)
console.log(ListNode)
