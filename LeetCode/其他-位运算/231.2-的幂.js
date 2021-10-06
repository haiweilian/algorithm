/*
 * @lc app=leetcode.cn id=231 lang=javascript
 *
 * [231] 2的幂
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
  // n & (n - 1) 公式判断是不是 2 的幂
  return n > 0 && (n & (n - 1)) == 0
}
// @lc code=end

// ===================================================================
// ========================== @test ==================================
// ===================================================================
console.log(isPowerOfTwo(1)) // true
console.log(isPowerOfTwo(16)) // true
console.log(isPowerOfTwo(218)) // false
