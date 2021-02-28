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

// 思路：递归地对树进行遍历，并从叶子节点先开始翻转。如果当前遍历到的节点 root 的左右两棵子树都已经翻转。
var invertTree = function (root) {
  if (root === null) {
    return root
  }

  // let left = invertTree(root.left)
  // let right = invertTree(root.right)
  // root.left = right
  // root.right = left

  // 使用解构赋值
  ;[root.left, root.right] = [invertTree(root.right), invertTree(root.left)]

  return root
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

let ret = invertTree(root)

console.log(ret)
