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

  for (let i = 0; i < nums.length; i++) {
    let min = i // 最小元素的下标（先假设是当前自己）
    // 不用和自己比较 && 每一次选择都会多一个有序的在前面，所以只需要查找剩余位置，从 j = i + 1 开始。
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] < nums[min]) {
        min = j // 找最小值
      }
    }
    // 交换位置
    ;[nums[i], nums[min]] = [nums[min], nums[i]]
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
