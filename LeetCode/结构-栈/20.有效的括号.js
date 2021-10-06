/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
/**
 * @description
 * 1、使用栈记录左括号，循环时如果是左括号就入栈，如果是右括号就出栈，最后栈里面没有元素就是有效的
 */
var isValid = function (s) {
  // 判断是否是偶数
  if (s.length % 2 !== 0) return false

  // 创建一个栈，和左右括号对应的字典
  let stack = []
  let obj = { "(": ")", "{": "}", "[": "]" }

  for (let i = 0; i < s.length; i++) {
    let k = s[i]
    if (k in obj) {
      // 如果是左括号，入栈。
      stack.push(k)
    } else {
      // 如果不是左括号，那么按理说应该开始闭合标签了。
      // 取出栈中的最后一个字符的右括号和当前字符对比，如果不匹配直接结束。
      if (obj[stack.pop()] !== k) {
        return false
      }
    }
  }

  // 如果栈中没有字符，那么就是有效的
  return !stack.length
}
// @lc code=end

// ===================================================================
// ========================== @test ==================================
// ===================================================================
console.log(isValid("()")) // true
console.log(isValid("()[]{}")) // true
console.log(isValid("([)]")) // false
