/*
 * @lc app=leetcode.cn id=83 lang=javascript
 *
 * [83] 删除排序链表中的重复元素
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
var deleteDuplicates = function (head) {
  if (!head || !head.next) return head

  let cur = head

  while (cur && cur.next) {
    // 如果当前节点的值 与 下一个节点一致，那么就让当前节点的指针指向下个节点的下一个节点，从而跳过重复的下一个节点。
    if (cur.val === cur.next.val) {
      cur.next = cur.next.next
    } else {
      cur = cur.next
    }
  }

  return head
}
// @lc code=end

// ===================================================================
// ========================== @test ==================================
// ===================================================================
let ListNode = {
  val: 1,
  next: {
    val: 1,
    next: {
      val: 2,
      next: {
        val: 3,
        next: {
          val: 3,
          next: null,
        },
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

console.log(print(deleteDuplicates(ListNode))) // 长度为 3 : 值为 1->2->3
