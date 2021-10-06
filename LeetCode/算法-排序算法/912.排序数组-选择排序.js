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
/**
 * @description
 * 找到数组中最小的元素，拎出来，将它和数组的第一个元素交换位置，第二步，在剩下的元素中继续寻找最小的元素，拎出来，和数组的第二个元素交换位置，如此循环，直到整个数组排序完成。找最大的元素也是一样的。
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
