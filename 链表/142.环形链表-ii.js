/*
 * @lc app=leetcode.cn id=142 lang=javascript
 *
 * [142] 环形链表 II
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
 * @return {boolean}
 */

// 思路：每循环一个节点，就把当前节点存起来，如果下次循环当前节点已经存在，那么起点就是当前节点。
// 空间复杂度 O(n)
var detectCycle1 = function (head) {
  let cache = new Set()
  while (head) {
    if (cache.has(head)) {
      // 判断是否已经存在
      return head
    } else {
      // 如果不存在则添加缓存
      cache.add(head)
    }
    head = head.next
  }
  return null
}

/***************************************************************************************************************** */

// 思路： 快慢指针->
// **只要是一个圆**，如操场跑步，一个人跑的快(fast)、一个人跑的慢(slow)，迟早跑的快的会追上跑的慢的(多跑了一圈)。
// **如果不是一个圆**，那么跑的快的就会先到达终点。
// **起点**，起点和慢点相遇就是入口。看图： <../maps/环形链表-快慢指针方式-查找入口.png>
// 空间复杂度 O(1)
var detectCycle = function (head) {
  let fast = head
  let slow = head
  let start = head
  while (fast && fast.next) {
    fast = fast.next.next // 快的跑两步
    slow = slow.next // 慢的跑一步
    if (fast === slow) {
      // 如果快的追上了慢的，那么它就是一个圆
      while (slow && start) {
        // 如果新开始的和慢的相遇了
        if (slow === start) {
          return slow
        }
        slow = slow.next
        start = start.next
      }
    }
  }
  return null
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
// 构建一个环形链表
ListNode.next.next.next = ListNode.next

console.log(detectCycle(ListNode))
