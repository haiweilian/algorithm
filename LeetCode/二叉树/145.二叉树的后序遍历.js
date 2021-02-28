/*
 * @lc app=leetcode.cn id=145 lang=javascript
 *
 * [145] 二叉树的后序遍历
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

// 思路：递归方式，创建一个栈存储值，先依次递归左子树和右子树。再把自己的值存起来。
var postorderTraversal = function (root, arr = []) {
  if (root) {
    postorderTraversal(root.left, arr)
    postorderTraversal(root.right, arr)
    arr.push(root.val)
  }
  return arr
}
// @lc code=end

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

console.log(postorderTraversal(root)) // [1, 3, 2, 6, 9, 7, 4]
