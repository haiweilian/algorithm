// 题目要求：
// 1、参考 LeetCode 1046 题目。
// 2、当处理不足 6 个的时候，停止处理流程。
// 3、把剩余的数字从小到大排序。
// 4、最后把数字拼接在一起。

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

let data = require("./data")

let lastStoneWeight = function (stones) {
  let heap = new Heap((a, b) => b - a)

  for (item of stones) {
    heap.push(item)
  }

  while (heap.size() > 5) {
    let s1 = heap.pop()
    let s2 = heap.pop()
    if (s1 !== s2) {
      heap.push(s1 - s2)
    }
  }

  let sort = heap.heap.sort((a, b) => a - b)

  let result = sort.reduce((acc, cur) => acc.toString() + cur.toString())

  return result
}

console.log(lastStoneWeight(data))
