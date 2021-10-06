/*
 * @lc app=leetcode.cn id=107 lang=javascript
 *
 * [107] 二叉树的层序遍历 II
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
 * @return {number[][]}
 */
var levelOrderBottom = function (root) {
  let k = 0
  let arr = []

  // 递归函数，记录层数、并收集节点值。
  function recursion(root, k, arr) {
    if (root === null) return root

    // 如果当前 二维数组 不存在，创建一个空的。
    if (!arr[k]) arr.push([])

    // 往对应的 二维数组 添加值。
    arr[k].push(root.val)

    // 依次递归 左子树 和 右子数。
    recursion(root.left, k + 1, arr)
    recursion(root.right, k + 1, arr)
  }

  recursion(root, k, arr)

  // 因为是自上向下遍历的，最后反转即可。
  return arr.reverse()
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

console.log(levelOrderBottom(root)) // [ [ 15, 7 ], [ 9, 20 ], [ 3 ] ]
