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

// 思路：记录左括号和右括号的映射表，当遍历的时候如果遇到左括号就往栈里 push 一个字符。
// 如果遇到右括号就在栈里 pop 一个字符，取出对应的右括号对比是否一致，如果不一致直接返回false。
// 最后如果栈中还有字符则返回 false ，没有返回 true。
var isValid = function (s) {
  // 判断是否是偶数
  if (s.length % 2 !== 0) return false

  // 创建一个栈，和左右括号对应的字典
  let stack = []
  let obj = { "(": ")", "{": "}", "[": "]" }

  for (let i = 0; i < s.length; i++) {
    let k = s[i]
    if (k in obj) {
      // 如果是左括号, 入栈
      stack.push(k)
    } else {
      // 如果不是左括号，那么就是改闭合的顺序了。
      // 取出栈中的最后一个字符的右括号和当前字符对比，如果不匹配直接结束。
      if (k != obj[stack.pop()]) {
        return false
      }
    }
  }

  // 如果栈中没有字符，那么就是有效的
  return !stack.length
}
// @lc code=end

console.log(isValid("()"))
console.log(isValid("()[]{}"))
console.log(isValid("([)]"))
