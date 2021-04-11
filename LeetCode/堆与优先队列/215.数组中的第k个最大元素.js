/*
 * @lc app=leetcode.cn id=215 lang=javascript
 *
 * [215] 数组中的第K个最大元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
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
var findKthLargest = function (nums, k) {
  // 维护⼀个大小为 K 小顶堆，当堆元素大于 k 的时候，把堆顶出堆。
  let heap = new Heap((a, b) => a - b)

  for (let item of nums) {
    heap.push(item)
    if (heap.size() > k) {
      heap.pop()
    }
  }

  return heap.peek()
}
// @lc code=end

// ===================================================================
// ========================== @test ==================================
// ===================================================================
console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2)) // 5
console.log(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4)) // 4
