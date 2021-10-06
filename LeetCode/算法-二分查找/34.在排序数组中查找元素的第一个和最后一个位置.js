/*
 * @lc app=leetcode.cn id=34 lang=javascript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var binarySearch = function (nums, target) {
  let head = 0
  let tail = nums.length
  let mid
  while (tail - head > 3) {
    mid = (head + tail) >> 1
    if (nums[mid] < target) {
      head = mid + 1
    } else {
      tail = mid
    }
  }
  for (let i = head; i <= tail; i++) {
    if (nums[i] >= target) return i
  }
  return nums.length
}
var searchRange = function (nums, target) {
  let ret = new Array(2)
  // 查找第一个的位置
  ret[0] = binarySearch(nums, target)
  // 如果返回的是最右边界(nums.length)和最左边界(0) 就是没有找到
  if (ret[0] === nums.length || nums[ret[0]] !== target) {
    ret[0] = ret[1] = -1
    return ret
  }
  // 查找最后一个的位置（查找比它大 1 的一个数的第一个，找到后再减去 1）
  ret[1] = binarySearch(nums, target + 1) - 1
  return ret
}
// @lc code=end

// ===================================================================
// ========================== @test ==================================
// ===================================================================
// console.log(searchRange([5, 7, 7, 8, 8, 10], 8))
// console.log(searchRange([5, 7, 7, 8, 8, 10], 6))
console.log(searchRange([5, 7, 7, 7, 7, 8, 8, 8, 8, 10], 8))
