/*
 * @lc app=leetcode.cn id=144 lang=javascript
 *
 * [144] 二叉树的前序遍历
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
 * @return {number[]}
 */
var preorderTraversal = function (root, arr = []) {
  // 递归方式，创建一个栈存储值，先把自己的值存起来，再依次递归左子树和右子树。
  if (root) {
    arr.push(root.val)
    preorderTraversal(root.left, arr)
    preorderTraversal(root.right, arr)
  }
  return arr
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
    left: { val: 6, left: null, right: null },
    right: { val: 9, left: null, right: null },
  },
}

console.log(preorderTraversal(root)) // [4, 2, 1, 3, 7, 6, 9]
