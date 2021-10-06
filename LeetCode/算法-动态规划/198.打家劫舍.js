/*
 * @lc app=leetcode.cn id=198 lang=javascript
 *
 * [198] 打家劫舍
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  let n = nums.length
  let dp = new Array(n).fill(0).map((item) => (item = new Array(2)))

  dp[0][0] = 0
  dp[0][1] = nums[0]

  for (i = 1; i < n; i++) {
    // 当前屋子不偷，那上一间屋子可以偷，也可以不偷，所以取上间屋子两者最大值
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1])
    // 当前屋子偷，那上一间屋子就不能偷，不偷的值 + 当前屋子的值
    dp[i][1] = dp[i - 1][0] + nums[i]
  }

  console.log(dp)

  // 取最后一项偷或者不偷的最大值
  return Math.max(dp[n - 1][0], dp[n - 1][1])
}
// @lc code=end

// ===================================================================
// ========================== @test ==================================
// ===================================================================
console.log(rob([1, 2, 3, 1])) // 4
