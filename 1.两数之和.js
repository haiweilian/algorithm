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

// @双层循环方案 ====================================================
// 双层循环的时间复杂度 O(n^2)
// var twoSum = function (nums, target) {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = 0; j < nums.length; j++) {
//       if (nums[i] + nums[j] === target && i !== j) {
//         return [i, j]
//       }
//     }
//   }
// }

// @标识方案 ====================================================
// 用对象存储目标值时间复杂度O(n)
var twoSum = function (nums, target) {
  let obj = {}
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i]
    if (num in obj) {
      // 如果当前值在目标，就找到了结果，取出索引
      return [obj[num], i]
    } else {
      // 如果没有找到，存储下需要的目标
      // 如果此次循环是 2, 那么我的目标值就是 7 索引是 1
      obj[target - num] = i
    }
  }
}
// @lc code=end

const nums = [2, 7, 11, 15]
const target = 9

console.log(twoSum(nums, target))
