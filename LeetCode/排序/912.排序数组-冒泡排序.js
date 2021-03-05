/*
 * @lc app=leetcode.cn id=912 lang=javascript
 *
 * [912] 排序数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {
  if (nums.length <= 1) return nums

  // 从前往后冒泡 最后一个不用比较；所以比较轮数是 nums.length - 1
  for (let i = 0; i < nums.length - 1; i++) {
    let flag = false

    // 最后一个不用比较并且每比较一轮都会多出一个有序的在后面。所以结束位置是 nums.length - 1 - i
    for (let j = 0; j < nums.length - 1 - i; j++) {
      if (nums[j] > nums[j + 1]) {
        // let temp = 0
        // temp = nums[j]
        // nums[j] = nums[j + 1]
        // nums[j + 1] = temp

        ;[nums[j], nums[j + 1]] = [nums[j + 1], nums[j]]

        flag = true
      }
    }

    // 如果这次循环都没有数字被交换 说明已经是排序好的数组
    if (!flag) return nums
  }

  return nums
}
// @lc code=end

// ===================================================================
// ========================== @test ==================================
// ===================================================================
console.log(sortArray([5, 2, 3, 1])) // [ 1, 2, 3, 5 ]
console.log(sortArray([5, 1, 1, 2, 0, 0])) // [ 0, 0, 1, 1, 2, 5 ]
console.log(sortArray([1])) // [1]
console.log(sortArray([1, 2, 3, 4, 5])) // [1, 2, 3, 4, 5]
