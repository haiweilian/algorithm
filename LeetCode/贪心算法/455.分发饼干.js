/*
 * @lc app=leetcode.cn id=455 lang=javascript
 *
 * [455] 分发饼干
 */

// @lc code=start
/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
  // 从最小的饼干分配给需求最小的孩子
  g = g.sort((a, b) => a - b)
  s = s.sort((a, b) => a - b)

  // 用指针记录发到第几个孩子和第几个饼干
  let i = 0
  let j = 0
  let c = 0

  while (i < g.length && j < s.length) {
    let need = g[i]
    let size = s[j]
    // 胃口值比饼干小分成功，继续下一个
    if (need <= size) {
      i++
      j++
      c++
    } else {
      j++
    }
  }

  return c
}
// @lc code=end

// ===================================================================
// ========================== @test ==================================
// ===================================================================
console.log(findContentChildren([1, 2], [1, 2, 3])) // 2
