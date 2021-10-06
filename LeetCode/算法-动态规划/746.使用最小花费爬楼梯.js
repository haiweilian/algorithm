/*
 * @lc app=leetcode.cn id=746 lang=javascript
 *
 * [746] 使用最小花费爬楼梯
 */

// @lc code=start
/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
  const n = cost.length
  const dp = []

  dp[0] = cost[0]
  dp[1] = cost[1]

  cost.push(0)
  for (let i = 2; i <= n; i++) {
    // 当前状态 = 到达当前步数的最小值
    dp[i] = Math.min(dp[i - 1], dp[i - 2]) + cost[i]
  }

  return dp[n]
}
// @lc code=end

// ===================================================================
// ========================== @test ==================================
// ===================================================================
console.log(minCostClimbingStairs([10, 15, 20]))
console.log(minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1]))
