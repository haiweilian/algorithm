/*
 * @lc app=leetcode.cn id=227 lang=javascript
 *
 * [227] 基本计算器 II
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
  let stack = []
  let num = 0
  let preSign = "+"
  for (let i = 0; i < s.length; i++) {
    // 数字和连续数字处理
    if (!isNaN(Number(s[i])) && s[i] !== " ") {
      num = num * 10 + Number(s[i])
    }
    // 判断操作符
    if (isNaN(Number(s[i])) || i === s.length - 1) {
      switch (preSign) {
        case "+":
          stack.push(num)
          break
        case "-":
          stack.push(-num)
          break
        case "*":
          stack.push(stack.pop() * num)
          break
        case "/":
          stack.push((stack.pop() / num) | 0)
          break
      }
      num = 0
      preSign = s[i]
    }
  }
  // 合计所有的集合
  let ans = 0
  while (stack.length) {
    ans += stack.pop()
  }
  return ans
}
// @lc code=end

// ===================================================================
// ========================== @test ==================================
// ===================================================================
console.log(calculate("3+2*2"))
console.log(calculate(" 3/2 "))
