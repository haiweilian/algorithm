/*
 * @lc app=leetcode.cn id=69 lang=javascript
 *
 * [69] x 的平方根
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  let left = 0
  let right = x
  let ans = -1

  while (left <= right) {
    let mid = Math.round((left + right) / 2)
    if (mid * mid <= x) {
      ans = mid
      left = mid + 1
    } else {
      right = mid - 1
    }
  }

  return ans
}
// @lc code=end

// ===================================================================
// ========================== @test ==================================
// ===================================================================
console.log(mySqrt(4)) // 2
console.log(mySqrt(8)) // 2
