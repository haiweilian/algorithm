/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
/**
 * @description
 * https://pic.leetcode-cn.com/0bf18f9b86a2542d1f6aa8db6cc45475fce5aa329a07ca02a9357c2ead81eec1-image.png
 */
var permute = function (nums) {
  let list = [] // 结果集合
  let temp = [] // 临时集合
  let flag = 0

  function backtrack() {
    flag++

    // 当排完一个组合，收集结果。开始 归 的过程。
    if (temp.length === nums.length) {
      return list.push([...temp])
    }

    for (let i = 0; i < nums.length; i++) {
      // 如果已经存在了，下一次循环跳过
      if (temp.includes(nums[i])) continue

      // 收集元素
      temp.push(nums[i])
      console.log(`递-${flag}-${i}`, temp)

      backtrack(temp)

      // 回溯的过程：删除一个回到上次，对应 push 操作。
      temp.pop()
      console.log(`归-${flag}-${i}`, temp)
    }
  }

  backtrack()

  return list
}
// @lc code=end

// ===================================================================
// ========================== @test ==================================
// ===================================================================
console.log(permute([1, 2, 3]))
// [
//   [ 1, 2, 3 ],
//   [ 1, 3, 2 ],
//   [ 2, 1, 3 ],
//   [ 2, 3, 1 ],
//   [ 3, 1, 2 ],
//   [ 3, 2, 1 ]
// ]
