/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除排序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  // 定义快(j)、慢(i)指针
  // 慢指针记录不重复元素的索引，每遇见一个不重复的就让元素放到前面。
  let i = 0
  for (let j = 1; j < nums.length; j++) {
    if (nums[i] !== nums[j]) {
      i += 1
      nums[i] = nums[j]
    }
  }
  return i + 1
}
// @lc code=end

// ===================================================================
// ========================== @test ==================================
// ===================================================================
let nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
let lens = removeDuplicates(nums)
for (let i = 0; i < lens; i++) {
  console.log(nums[i])
}
