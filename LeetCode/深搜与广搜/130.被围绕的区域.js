/*
 * @lc app=leetcode.cn id=130 lang=javascript
 *
 * [130] 被围绕的区域
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
// 本题查找的是被包围的区域，但是不好查找。
// 先按边缘查找没有被包围的区域标记为 o ，与边缘相连肯定不会被包围。
// 处理完一遍后，那么剩余的 O 就是被包围的，再标记成 X。
var solve = function (board) {
  // m * n
  let m = board.length
  let n = board[0].length
  // dfs
  let dfs = (i, j) => {
    // 是否越界了，超出了矩阵的边缘。
    if (i < 0 || i === m || j < 0 || j == n) return
    if (board[i][j] === "O") {
      // 标记过 o，证明已经处理过
      board[i][j] = "o"
      // 分别再向四个方向查找
      dfs(i - 1, j)
      dfs(i + 1, j)
      dfs(i, j - 1)
      dfs(i, j + 1)
    }
  }

  // 分别为每个外层的点开始遍历
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      // 从边缘开始查找
      if (i === 0 || i === m - 1 || j === 0 || j === n - 1) {
        // 如果是 O 再开始继续查找。
        if (board[i][j] === "O") dfs(i, j)
      }
    }
  }

  // 将 O 处理成 x，将 o 初始成 0
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === "O") {
        board[i][j] = "X"
      } else if (board[i][j] === "o") {
        board[i][j] = "O"
      }
    }
  }

  return board
}
// @lc code=end

// ===================================================================
// ========================== @test ==================================
// ===================================================================
console.log(
  solve([
    ["X", "X", "X", "X"],
    ["X", "O", "O", "X"],
    ["X", "X", "O", "X"],
    ["X", "O", "X", "X"],
  ])
)
console.log(
  solve([
    ["X", "O", "X", "O", "X", "O"],
    ["O", "X", "O", "X", "O", "X"],
    ["X", "O", "X", "O", "X", "O"],
    ["O", "X", "O", "X", "O", "X"],
  ])
)
