/*
 * @lc app=leetcode.cn id=82 lang=javascript
 *
 * [82] 删除排序链表中的重复元素 II
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
  // 可能要删除第一个，所以要定义一个哨兵节点。
  let ret = { next: head }
  let pre = ret
  let cur = head

  while (cur && cur.next) {
    // 如果上个节点和下个节点不相等，都往后移动一位。
    if (cur.next.val != pre.next.val) {
      cur = cur.next
      pre = pre.next
    } else {
      // 如果相等，连续查找相等的值，这样可以一次性跳过。
      while (cur && cur.next && cur.next.val === pre.next.val) {
        cur = cur.next
      }
      // 把相同的节点跳过，继续下次查找
      pre.next = cur.next
      cur = cur.next
    }
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
      val: 2,
      next: {
        val: 3,
        next: {
          val: 3,
          next: {
            val: 4,
            next: null,
          },
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

console.log(print(deleteDuplicates(ListNode))) // 长度为 2 : 值为 1->4
