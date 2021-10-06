/*
 * @lc app=leetcode.cn id=322 lang=javascript
 *
 * [322] 零钱兑换
 */

// @lc code=start
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  let dp = new Array(amount + 1).fill(-1)
  dp[0] = 0
  for (let i = 1; i <= amount; i++) {
    for (let x of coins) {
      // 当前硬币用不上
      if (i < x) continue
      if (dp[i - x] === -1) continue
      if (dp[i] === -1 || dp[i] > dp[i - x] + 1) {
        dp[i] = dp[i - x] + 1
      }
    }
  }
  return dp[amount]
}
// @lc code=end

// ===================================================================
// ========================== @test ==================================
// ===================================================================
console.log(coinChange([1, 2, 5], 11)) // 3
