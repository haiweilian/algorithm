/*
 * @lc app=leetcode.cn id=494 lang=javascript
 *
 * [494] 目标和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
/**
 * @description
 * 每次向后移动一步当前可以是 + 或者是 -，当到末尾的时候，判断是不是相等。
 */
var findTargetSumWays = function (nums, target) {
  let count = 0
  let dfs = (nums, target, index, sum) => {
    // 末尾的时候判断，是不是等于目标值。
    if (index === nums.length) {
      if (sum === target) {
        count++
      }
    } else {
      dfs(nums, target, index + 1, sum + nums[index])
      dfs(nums, target, index + 1, sum - nums[index])
    }
  }
  dfs(nums, target, 0, 0)

  return count
}
// @lc code=end

// ===================================================================
// ========================== @test ==================================
// ===================================================================
console.log(findTargetSumWays([1, 1, 1, 1, 1], 3))
