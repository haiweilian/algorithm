/*
 * @lc app=leetcode.cn id=946 lang=javascript
 *
 * [946] 验证栈序列
 */

// @lc code=start
/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function (pushed, popped) {
  let stack = []
  let index = 0

  for (let cur of pushed) {
    stack.push(cur)
    // 当遇到相等时开始出栈
    while (stack[stack.length - 1] === popped[index] && stack.length > 0) {
      stack.pop()
      index += 1
    }
  }

  return !stack.length
}
// @lc code=end

// ===================================================================
// ========================== @test ==================================
// ===================================================================
console.log(validateStackSequences([1, 2, 3, 4, 5], [4, 5, 3, 2, 1])) // true
console.log(validateStackSequences([1, 2, 3, 4, 5], [4, 3, 5, 1, 2])) // false
