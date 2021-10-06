/*
 * @lc app=leetcode.cn id=100 lang=javascript
 *
 * [100] 相同的树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
  // 使用递归分别对比 p 和 q 的 左子树和右子树，(如果左子树层级相同 && 值相同) && (如果右子树层级相同 && 值相同)

  // 都为 null 相等
  if (p === null && q === null) {
    return true
  }

  // 其中一个为 null 不相等
  if (p === null || q === null) {
    return false
  }

  // 值不同 不相等
  if (p.val != q.val) {
    return false
  }

  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
}
// @lc code=end

// ===================================================================
// ========================== @test ==================================
// ===================================================================
let p = {
  val: 0,
  left: {
    val: 1,
    left: { val: 2, left: null, right: null },
    right: { val: 3, left: null, right: null },
  },
  right: {
    val: 5,
    left: { val: 6, left: null, right: null },
    right: null,
  },
}

let q = {
  val: 0,
  left: {
    val: 1,
    left: { val: 2, left: null, right: null },
    right: { val: 3, left: null, right: null },
  },
  right: {
    val: 5,
    left: { val: 6, left: null, right: null },
    right: null,
  },
}

let m = {
  val: 0,
  left: {
    val: 1,
    left: { val: 2, left: null, right: null },
    right: { val: 3, left: null, right: null },
  },
  right: {
    val: 5,
    left: null,
    right: null,
  },
}

console.log(isSameTree(p, q)) // true
console.log(isSameTree(p, m)) // false
console.log(isSameTree(q, m)) // false
