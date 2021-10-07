/*
 * @lc app=leetcode.cn id=81 lang=javascript
 *
 * [81] 搜索旋转排序数组 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function (nums, target) {
  return nums.includes(target)
}
// @lc code=end

// ===================================================================
// ========================== @test ==================================
// ===================================================================
console.log(search([2, 5, 6, 0, 0, 1, 2], 0))
console.log(search([2, 5, 6, 0, 0, 1, 2], 3))
