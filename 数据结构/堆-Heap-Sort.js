// 利用 "Array.prototype.sort" 只完成 "大" 的先出 或 "小" 的优先出的特性。

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

let heap = new Heap()

heap.push(4)
heap.push(5)
heap.push(1)
console.log(heap.peek()) // 1
heap.pop()
console.log(heap.peek()) // 4
heap.pop()
console.log(heap.peek()) // 5
