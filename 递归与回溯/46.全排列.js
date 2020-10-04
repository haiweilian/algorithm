/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function backtrack(list, temp, nums) {
  if (temp.length === nums.length) {
    return list.push([...temp])
  }
  for (let i = 0; i < nums.length; i++) {
    if (temp.includes(nums[i])) continue
    temp.push(nums[i])
    backtrack(list, temp, nums)
    temp.pop()
  }
}
var permute = function (nums) {
  let list = []
  backtrack(list, [], nums)
  return list
}
// @lc code=end

console.log(permute([1, 2, 3]))
