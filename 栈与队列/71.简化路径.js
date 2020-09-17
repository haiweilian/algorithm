/*
 * @lc app=leetcode.cn id=71 lang=javascript
 *
 * [71] 简化路径
 */

// @lc code=start
/**
 * @param {string} path
 * @return {string}
 */

// 思路：先创建一个栈(数组)。再把路径以 "/" 才分成数组，循环数组的每项：
// 如果是 ".." 返回上一层，那么最后出栈一个。
// 如果是 "" || "." 不影响层级，不变。
// 如果是正常字符，则把当前字符入栈。
// 最后把数组以 "/" 拆分成字符串并在前面加上 "/" 表示绝对路径。

var simplifyPath = function (path) {
  // 创建一个栈
  let stack = []
  // 以 "/" 把路径拆分成每项
  let paths = path.split("/")
  for (let i = 0; i < paths.length; i++) {
    let p = paths[i]
    if (p === "..") {
      // 如果是回到上一层，则出栈一层
      stack.pop()
    } else if (p && p != ".") {
      // "" 和 "." 不管，其他入栈一层
      stack.push(p)
    }
  }
  return `/${stack.join("/")}`
}
// @lc code=end

console.log(simplifyPath("/a/./b/../../c/")) // "/c"
console.log(simplifyPath("/a//b////c/d//././/..")) // "/a/b/c"
console.log(simplifyPath("../../")) // "/"
