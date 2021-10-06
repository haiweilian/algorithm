/*
 * @lc app=leetcode.cn id=35 lang=javascript
 *
 * [35] 搜索插入位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let head = 0
  let tail = nums.length
  let mid
  while (head < tail) {
    mid = (head + tail) >> 1
    console.log("...", nums.slice(head, mid + 1))
    if (nums[mid] < target) {
      head = mid + 1
    } else {
      tail = mid
    }
  }
  return head
}
// @lc code=end

// ===================================================================
// ========================== @test ==================================
// ===================================================================
console.log(searchInsert([1, 2, 3, 4, 5, 6, 7, 8, 9], 5))
console.log(searchInsert([1, 2, 3, 4, 5, 6, 7, 8, 9], 0))
console.log(searchInsert([1, 2, 3, 4, 5, 6, 7, 8, 9], 10))
