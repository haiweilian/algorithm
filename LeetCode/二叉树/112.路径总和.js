/*
 * @lc app=leetcode.cn id=112 lang=javascript
 *
 * [112] 路径总和
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
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
  if (root === null) return false

  // 找到最后一个节点
  if (root.left === null && root.right === null) {
    return targetSum === root.val
  }

  // 递减查找的值，最后一个节点的值应该和剩余的相等。
  let left = hasPathSum(root.left, targetSum - root.val)
  let right = hasPathSum(root.right, targetSum - root.val)

  return left || right
}
// @lc code=end

// ===================================================================
// ========================== @test ==================================
// ===================================================================
let root = {
  val: 3,
  left: {
    val: 9,
    left: null,
    right: null,
  },
  right: {
    val: 20,
    left: { val: 15, left: null, right: null },
    right: { val: 7, left: null, right: null },
  },
}

console.log(hasPathSum(root, 12)) // true
console.log(hasPathSum(root, 30)) // true
console.log(hasPathSum(root, 23)) // false
