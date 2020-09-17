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

// var twoSum = function (nums, target) {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = 0; j < nums.length; j++) {
//       if (nums[i] + nums[j] === target && i !== j) {
//         return [i, j]
//       }
//     }
//   }
// }

// 思路：每当循环一个数的时候，我们可以知道需要的目标值是几（target - num = 目标值）。
// 把目标值当做一个key，当前索引当做 value 存在一个对象里。
// 那么下次循环的时候，当前值在对象里，那么就找到了目标值取出索引与当前索引一起返回。
// 这次只循环了一次，时间复杂度 O(n)，空间复杂度 O(n)，典型用空间换时间。

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
