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
/**
 * @description
 * 当 m * m <= x 并且最接近 x 的时候，那么这个值就是平方根
 */
var mySqrt = function (x) {
  let head = 0
  let tail = x
  let ans = -1

  while (head <= tail) {
    let mid = (head + tail) >> 1
    // 小于的时候继续保存当前值继续查找，直到找到最后的一个
    if (mid * mid <= x) {
      ans = mid
      head = mid + 1
    } else {
      tail = mid - 1
    }
  }

  return ans
}
// @lc code=end

// ===================================================================
// ========================== @test ==================================
// ===================================================================
console.log(mySqrt(4)) // 2
console.log(mySqrt(10)) // 3
