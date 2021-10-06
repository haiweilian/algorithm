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
/**
 * @description
 * 1、使用对象记录当前元素的目标值和当前索引，下次再循环如果对象中包含此值，那么此值就是目标值
 */
var twoSum = function (nums, target) {
  let obj = {}
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i]

    // 如果当前值在目标，就找到了结果，取出索引
    if (num in obj) {
      return [obj[num], i]
    }

    // 如果没找到，就把目标值当成 key，当前索引当成 value，存进对象里。
    // 如果此次循环是 2, 那么我的目标值就是 7 索引是 1
    obj[target - num] = i
  }
}
// @lc code=end

// ===================================================================
// ========================== @test ==================================
// ===================================================================
console.log(twoSum([2, 7, 11, 15], 9)) // [ 0, 1 ]
console.log(twoSum([2, 7, 2, 4], 4)) // [ 0, 2 ]
