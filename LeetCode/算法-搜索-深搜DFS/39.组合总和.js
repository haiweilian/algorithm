/*
 * @lc app=leetcode.cn id=39 lang=javascript
 *
 * [39] 组合总和
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
/**
 * @description
 * 1、如果我们将整个搜索过程用一个树来表达，每次的搜索都会延伸出两个分叉。
 */
var combinationSum = function (candidates, target) {
  let ans = []
  let dfs = (target, combine, index) => {
    if (index === candidates.length) {
      return
    }
    if (target === 0) {
      ans.push(combine)
      return
    }
    dfs(target, combine, index + 1)

    if (target - candidates[index] >= 0) {
      dfs(target - candidates[index], [...combine, candidates[index]], index)
    }
  }
  dfs(target, [], 0)
  return ans
}
// @lc code=end

// ===================================================================
// ========================== @test ==================================
// ===================================================================
console.log(combinationSum([2, 3, 6, 7], 7))
