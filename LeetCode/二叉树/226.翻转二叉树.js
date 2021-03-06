/*
 * @lc app=leetcode.cn id=226 lang=javascript
 *
 * [226] 翻转二叉树
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
 * @return {TreeNode}
 */
var invertTree = function (root) {
  // 递归地对树进行遍历，并从叶子节点先开始翻转。如果当前遍历到的节点 root 的左右两棵子树都已经翻转。
  if (root === null) {
    return root
  }

  let left = invertTree(root.left)
  let right = invertTree(root.right)
  root.left = right
  root.right = left

  // 使用解构赋值
  // ;[root.left, root.right] = [invertTree(root.right), invertTree(root.left)]

  return root
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

function preorderTraversal(root, arr = []) {
  if (root) {
    arr.push(root.val)
    preorderTraversal(root.left, arr)
    preorderTraversal(root.right, arr)
  }
  return arr
}

console.log(preorderTraversal(root)) // [ 4, 2, 1, 3, 7, 6, 9 ]
console.log(preorderTraversal(invertTree(root))) // [ 4, 7, 9, 6, 2, 3, 1 ]
