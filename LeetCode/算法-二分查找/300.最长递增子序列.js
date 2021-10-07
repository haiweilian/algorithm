/*
 * @lc app=leetcode.cn id=300 lang=javascript
 *
 * [300] 最长递增子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  let dp = new Array(nums.length).fill(0)
  let res = 0
  for (let num of nums) {
    // [1, 2, 3, 4, 5, 6, 7, 8, 9]
    // 在现有序列的范围内查找当前值插入的位置(dp是一个有序列表)。
    let head = 0
    let tail = res
    while (head < tail) {
      let mid = (head + tail) >> 1
      if (dp[mid] < num) {
        head = mid + 1
      } else {
        tail = mid
      }
    }

    // 更新最后序列中的值
    dp[head] = num

    // 如果序列中没有比当前值大的，那么序列长度 + 1
    if (res === tail) res++

    console.log(head, dp)
  }
  return res
}
// @lc code=end

// ===================================================================
// ========================== @test ==================================
// ===================================================================
console.log(lengthOfLIS([1, 3, 2, 5])) // 3
