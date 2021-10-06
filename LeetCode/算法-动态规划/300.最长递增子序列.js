/*
 * @lc app=leetcode.cn id=300 lang=javascript
 *
 * [300] 最长递增子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  // 每个元素都可以成为子序列，默认长度都是一
  let dp = new Array(nums.length).fill(1)
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      // 求出以 i 位作为结尾的最长上升子序列的长度，找到比 i 小的元素
      if (nums[j] < nums[i]) {
        // 然后当前序列的最长子序列长度 +1
        dp[i] = Math.max(dp[i], dp[j] + 1)
      }
    }
  }

  // 在所有的子序列当中获取最大值
  let ret = Math.max(...dp)
  return ret
}
// @lc code=end

// ===================================================================
// ========================== @test ==================================
// ===================================================================
console.log(lengthOfLIS([1, 2, 5])) // 3
