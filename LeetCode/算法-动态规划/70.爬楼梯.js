/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  let dp = []
  dp[0] = 1
  dp[1] = 1
  for (let i = 2; i <= n; i++) {
    // 当前状态 = 前两个此数之和
    dp[i] = dp[i - 1] + dp[i - 2]
  }
  return dp[n]
}
// @lc code=end

// ===================================================================
// ========================== @test ==================================
// ===================================================================
// console.log(climbStairs(2))
console.log(climbStairs(5))
