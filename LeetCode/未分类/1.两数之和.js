/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// 思路：暴力破解，双层循环，两数相加判断。双层循环的时间复杂度 O(n^2)，时间消耗大。
var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (nums[i] + nums[j] === target && i !== j) {
        return [i, j]
      }
    }
  }
}
// @lc code=end

const nums = [2, 7, 11, 15]
const target = 9

console.log(twoSum(nums, target))
