// 概述：Queue 和 Stack 有一些类似，不同的是 Stack 是先进后出，而 Queue 是先进先出。
// Javascript 中的 Array 已经具备了 Queue 的一些特性，所以我们可以借助 Array 实现一个Queue类型。

class Queue {
  constructor() {
    this.collection = []
  }

  // 入列
  enqueue(element) {
    this.collection.push(element)
  }

  // 出列
  dequeue() {
    this.collection.shift()
  }

  // 列首
  front() {
    return this.collection[0]
  }

  get length() {
    return this.collection.length
  }
}

let queue = new Queue()

queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
queue.dequeue()

console.log(queue.front())
console.log(queue.length)
