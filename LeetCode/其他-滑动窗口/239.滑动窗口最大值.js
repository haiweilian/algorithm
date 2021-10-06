/*
 * @lc app=leetcode.cn id=239 lang=javascript
 *
 * [239] 滑动窗口最大值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
/**
 * @description
 * 1、维护单调队列中的最大值
 */
var maxSlidingWindow = function (nums, k) {
  let q = []
  let ret = []
  for (let i = 0; i < nums.length; i++) {
    // 把违反单调递减队列的剔除
    while (q.length && nums[i] >= nums[q[q.length - 1]]) {
      q.pop()
    }

    q.push(i)

    if (i - q[0] >= k) {
      q.shift()
    }

    if (i + 1 < k) {
      continue
    }

    ret.push(nums[q[0]])
  }
  return ret
}
// @lc code=end

console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3))
