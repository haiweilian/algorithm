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
var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      // 双层循环，两数相加判断 && 判断不是同一个元素
      if (nums[i] + nums[j] === target && i != j) {
        return [i, j]
      }
    }
  }
}
// @lc code=end

// ===================================================================
// ========================== @test ==================================
// ===================================================================
console.log(twoSum([2, 7, 11, 15], 9)) // [ 0, 1 ]
console.log(twoSum([2, 7, 2, 4], 4)) // [ 0, 2 ]
