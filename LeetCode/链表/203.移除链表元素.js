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
var removeElements = function (head, val) {
  // 定义一个哨兵节点，便于遍历
  let ele = {
    next: head,
  }
  let cur = ele

  while (cur.next) {
    // 依次判断下一个节点的值是不是等于输入值
    if (cur.next.val === val) {
      // 让当前节点的指针指向下一个节点的下一个节点
      cur.next = cur.next.next
    } else {
      cur = cur.next
    }
  }

  // 去除哨兵节点返回
  return ele.next
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
        val: 2,
        next: null,
      },
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

console.log(print(removeElements(ListNode, 2))) // 长度为 2 : 值为 1->3
