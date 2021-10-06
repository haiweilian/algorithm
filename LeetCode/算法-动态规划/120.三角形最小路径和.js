/*
 * @lc app=leetcode.cn id=120 lang=javascript
 *
 * [120] 三角形最小路径和
 */

// @lc code=start
/**
 * @param {number[][]} triangle
 * @return {number}
 */
/**
 * @description
 * 1、从后往前递推，依次得出当前行和下一行相邻的最小值
 */
var minimumTotal = function (triangle) {
  let n = triangle.length - 1
  let dp = triangle[n]

  for (let i = n - 1; i >= 0; i--) {
    for (let j = 0; j < triangle[i].length; j++) {
      dp[j] = triangle[i][j] + Math.min(dp[j], dp[j + 1])
    }
  }
  return dp[0]
}
// @lc code=end

// ===================================================================
// ========================== @test ==================================
// ===================================================================
console.log(minimumTotal([[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]]))
