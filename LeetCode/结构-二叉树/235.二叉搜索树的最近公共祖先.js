/*
 * @lc app=leetcode.cn id=235 lang=javascript
 *
 * [235] 二叉搜索树的最近公共祖先
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
var lowestCommonAncestor = function (root, p, q) {
  // 思路：二叉搜索树可以通过大小来判断
  // 如果树节点的值位于 p 和 q 两节点值中间或与某个节点相等，则该节点一定是两节点最近父节点。
  // 如果树节点值大于两节点值，则两节点都位于树节点的左子树，将其左节点作为当前节点搜索。
  // 如果树节点值小于两节点值，则两节点都位于树节点的右子树，将其右节点作为当前节点搜索。
  if (p.val > root.val && q.val < root.val) {
    return lowestCommonAncestor(root.right, p, q)
  } else if (p.val < root.val && q.val < root.val) {
    return lowestCommonAncestor(root.left, p, q)
  } else {
    return root
  }
}
// @lc code=end

// ===================================================================
// ========================== @test ==================================
// ===================================================================
let root = {
  val: 6,
  left: {
    val: 2,
    left: { val: 0, left: null, right: null },
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
