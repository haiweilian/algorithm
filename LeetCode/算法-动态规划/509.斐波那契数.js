/*
 * @lc app=leetcode.cn id=509 lang=javascript
 *
 * [509] 斐波那契数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
/**
 * @description
 * 1、根据斐波那契数的特性可得当前值等于前两个值的和
 * 2、得出结果并存储起来，算出最终次数的结果
 */
var fib = function (n) {
  if (n < 2) return n
  let dp = [0, 1]
  for (let i = 2; i <= n; i++) {
    // 当前状态 = 前两个数之和
    dp[i] = dp[i - 1] + dp[i - 2]
  }
  return dp[n]
}
// @lc code=end

// ===================================================================
// ========================== @test ==================================
// ===================================================================
console.log(fib(2))
console.log(fib(3))
console.log(fib(4))
