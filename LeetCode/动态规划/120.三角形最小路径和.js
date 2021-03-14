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
// https://pic.leetcode-cn.com/13dafa7efab2287884a901a99c04c1f7b7ef2dcf5e6f2a8dfa477e2ac6890e8b-image.png
var minimumTotal = function (triangle) {
  let n = triangle.length - 1
  let dp = triangle[n]

  // 从下往上动态递推
  for (let i = n - 1; i >= 0; i--) {
    for (let j = 0; j < triangle[i].length; j++) {
      // 1、[4, 1, 8, 3] 和 [6, 5, 7] 得出 [7, 6, 10]
      // 2、[7, 6, 10] 和 [3, 4]  得出 [9, 10]
      // 3、[10, 9] 和 [2] 得出 [11]
      dp[j] = triangle[i][j] + Math.min(dp[j], dp[j + 1])
    }
  }

  return dp[0]
}
// @lc code=end

// ===================================================================
// ========================== @test ==================================
// ===================================================================
console.log(minimumTotal([[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]])) // 11
