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
var simplifyPath = function (path) {
  let stack = []
  let paths = path.split("/")

  for (let i = 0; i < paths.length; i++) {
    let p = paths[i]
    if (p === "..") {
      // 如果是 ".." 回到到上一层，则出栈一层
      stack.pop()
    } else if (p != "" && p != ".") {
      // "" 和 "." 不管，其他入栈一层
      stack.push(p)
    }
  }

  // 最后拆分成字符串，并以 "/" 开头
  return `/${stack.join("/")}`
}
// @lc code=end

// ===================================================================
// ========================== @test ==================================
// ===================================================================
console.log(simplifyPath("/a/./b/../../c/")) // "/c"
console.log(simplifyPath("/a//b////c/d//././/..")) // "/a/b/c"
console.log(simplifyPath("../../")) // "/"
