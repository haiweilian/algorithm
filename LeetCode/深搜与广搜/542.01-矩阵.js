/*
 * @lc app=leetcode.cn id=542 lang=javascript
 *
 * [542] 01 矩阵
 */

// @lc code=start
/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function (mat) {
  let n = mat.length
  let m = mat[0].length

  // 构建矩阵
  let ans = new Array(n)
  for (let i = 0; i < n; i++) {
    ans[i] = new Array(m).fill(-1)
  }

  // 每个为 0 的坐标
  let queue = []
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (mat[i][j] === 0) {
        ans[i][j] = 0
        queue.push([i, j])
      }
    }
  }

  // 广搜优先遍历，先遍历现有的，如果当前的可以往下，就添加到队列后。
  let step = 0
  while (queue.length) {
    step++
    let len = queue.length
    for (let i = 0; i < len; i++) {
      let top = queue.shift()
      let x = top[0]
      let y = top[1]
      if (x + 1 < n && ans[x + 1][top[1]] === -1) {
        queue.push([x + 1, top[1]])
        ans[x + 1][y] = step
      }
      if (x - 1 >= 0 && ans[x - 1][y] === -1) {
        queue.push([x - 1, y])
        ans[x - 1][y] = step
      }
      if (y + 1 < m && ans[x][y + 1] === -1) {
        queue.push([x, y + 1])
        ans[x][y + 1] = step
      }
      if (y - 1 >= 0 && ans[x][y - 1] === -1) {
        queue.push([x, y - 1])
        ans[x][y - 1] = step
      }
    }
  }

  console.log(ans)
  console.log(queue)
  return ans
}
// @lc code=end

// ===================================================================
// ========================== @test ==================================
// ===================================================================
updateMatrix([
  [0, 0, 0],
  [0, 1, 0],
  [1, 1, 1],
])
