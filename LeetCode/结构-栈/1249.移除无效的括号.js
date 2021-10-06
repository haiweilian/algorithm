/*
 * @lc app=leetcode.cn id=1249 lang=javascript
 *
 * [1249] 移除无效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function (s) {
  // 记录需要删除字符的索引
  let leftStack = []
  let rightStack = []

  for (let i = 0; i < s.length; i++) {
    let str = s[i]
    if (str === "(") {
      leftStack.push(i)
    } else if (str === ")") {
      // 如果有对应的 '(' , 从删除列表中移除
      // 否则 ')' 是多余的，加入右括号的删除列表
      if (leftStack.length > 0) {
        leftStack.pop()
      } else {
        rightStack.push(i)
      }
    }
  }

  // 去除需要删除的括号
  let ns = [...s]
  for (let i of [...leftStack, ...rightStack]) {
    ns[i] = ""
  }

  return ns.join("")
}
// @lc code=end

// ===================================================================
// ========================== @test ==================================
// ===================================================================
console.log(minRemoveToMakeValid("a)b(c)d")) // "ab(c)d"
console.log(minRemoveToMakeValid("lee(t(c)o)de)")) // "lee(t(c)o)de"
