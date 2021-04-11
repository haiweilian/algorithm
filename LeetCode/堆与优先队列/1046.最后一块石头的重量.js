/*
 * @lc app=leetcode.cn id=1046 lang=javascript
 *
 * [1046] 最后一块石头的重量
 */

// @lc code=start
/**
 * @param {number[]} stones
 * @return {number}
 */
// 小顶堆：compare = (a, b) => a - b
// 大顶堆：compare = (a, b) => b - a
class Heap {
  constructor(compare) {
    this.heap = []
    this.compare = compare
  }
  push(item) {
    this.heap.push(item)
    this.heap = this.heap.sort(this.compare)
  }
  pop() {
    return this.heap.shift()
  }
  peek() {
    return this.heap[0]
  }
  size() {
    return this.heap.length
  }
}
var lastStoneWeight = function (stones) {
  // 维护⼀个大顶堆，然后每次取出堆顶的元素，两两相减，将结果再加⼊到堆中，直到堆中的元素 ⼩于两个。
  let heap = new Heap((a, b) => b - a)

  for (item of stones) {
    heap.push(item)
  }

  while (heap.size() > 1) {
    let s1 = heap.pop()
    let s2 = heap.pop()
    if (s1 !== s2) {
      heap.push(s1 - s2)
    }
  }

  return heap.size() ? heap.peek() : 0
}
// @lc code=end

// ===================================================================
// ========================== @test ==================================
// ===================================================================
console.log(lastStoneWeight([2, 7, 4, 1, 8, 1])) // 1
