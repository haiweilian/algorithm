/*
 * @lc app=leetcode.cn id=104 lang=javascript
 *
 * [104] 二叉树的最大深度
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
  // 左子树的高度和右子树的高度取最大值，加上当前的高度 1。
  if (root === null) {
    return 0
  }

  let left = maxDepth(root.left)
  let right = maxDepth(root.right)

  return Math.max(left, right) + 1
}
// @lc code=end

// ===================================================================
// ========================== @test ==================================
// ===================================================================
let root = {
  val: 4,
  left: {
    val: 2,
    left: { val: 1, left: null, right: null },
    right: { val: 3, left: null, right: null },
  },
  right: {
    val: 7,
    left: null,
    right: null,
  },
}

console.log(maxDepth(root)) // 3
