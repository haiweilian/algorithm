/*
 * @lc app=leetcode.cn id=79 lang=javascript
 *
 * [79] 单词搜索
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  // 回溯：找一个起点，尝试下一步，看结果，不行再回到上一步，走别的路。

  // 做一些初始的判断
  if (board.length == 0) return false
  if (word.length === 0) return true

  // 记录行列
  const row = board.length
  const col = board[0].length

  // 每个都可以作为起点。
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      const ret = find(i, j, 0)
      if (ret) return true
    }
  }
  // 如果没有找到
  return false

  // cur 起点
  function find(i, j, cur) {
    // 0、终止标志
    // 越界
    if (i >= row || i < 0) return false
    if (j >= col || j < 0) return false

    // 当前的网格字母
    const letter = board[i][j]
    // 当前board字母 和 word字母不匹配
    if (letter != word[cur]) return false
    // 找到最后一个还相等
    if (cur == word.length - 1) return true

    // 1、做标记
    board[i][j] = null

    // 2、递归进行下一步查找，要查这个字母的 “上下左右” 四个位置
    const ret =
      find(i + 1, j, cur + 1) ||
      find(i - 1, j, cur + 1) ||
      find(i, j + 1, cur + 1) ||
      find(i, j - 1, cur + 1)

    // 3、撤回标记
    board[i][j] = letter

    return ret
  }
}
// @lc code=end

const board = [
  ["A", "B", "C", "E"],
  ["S", "F", "C", "S"],
  ["A", "D", "E", "E"],
]

console.log(exist(board, "ABCCED"))
console.log(exist(board, "SEE"))
console.log(exist(board, "ABCB"))
