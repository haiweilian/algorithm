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
  let dp = new Array(amount + 1).fill(Infinity)

  dp[0] = 0

  for (let i of coins) {
    // 1、[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
    // 2、[0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6]
    // 3、[0, 1, 1, 2, 2, 1, 2, 2, 3, 3, 2, 3]
    for (let j = 1; j <= amount; j++) {
      if (i <= j) {
        dp[j] = Math.min(dp[j], dp[j - i] + 1)
      }
    }
    console.log(dp)
  }

  return dp[amount] > amount ? -1 : dp[amount]
}
// @lc code=end

// ===================================================================
// ========================== @test ==================================
// ===================================================================
console.log(coinChange([1, 2, 5], 11)) // 3
