/*
 * @lc app=leetcode.cn id=4 lang=javascript
 *
 * [4] 寻找两个正序数组的中位数
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  let arr = nums1.concat(nums2).sort((a, b) => a - b)
  if (arr.length % 2 === 0) {
    return (arr[arr.length / 2] + arr[arr.length / 2 - 1]) / 2
  } else {
    return arr[arr.length >> 1]
  }
}
// @lc code=end

console.log(findMedianSortedArrays([1, 3], [2]))
console.log(findMedianSortedArrays([1, 2], [3, 4]))
