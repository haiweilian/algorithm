/*
 * @lc app=leetcode.cn id=236 lang=javascript
 *
 * [236] 二叉树的最近公共祖先
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */

// 思路：如果左子树没有 p 或者 q，那就去右边找。
// 在后序遍历，如果两边都找到了，那 root 就是。
var lowestCommonAncestor = function (root, p, q) {
  if (root === null || root.val === p.val || root.val === q.val) {
    return root
  }
  let left = lowestCommonAncestor(root.left, p, q)
  let right = lowestCommonAncestor(root.right, p, q)

  if (left === null) {
    return right
  }
  if (right === null) {
    return left
  }
  return root
}
// @lc code=end

let root = {
  val: 6,
  left: {
    val: 2,
    left: { val: 10, left: null, right: null },
    right: { val: 4, left: null, right: null },
  },
  right: {
    val: 8,
    left: { val: 7, left: null, right: null },
    right: { val: 9, left: null, right: null },
  },
}

console.log(lowestCommonAncestor(root, { val: 2 }, { val: 9 }).val) // 6
console.log(lowestCommonAncestor(root, { val: 2 }, { val: 4 }).val) // 2
