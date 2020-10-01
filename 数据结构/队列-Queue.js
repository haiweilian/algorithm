// 概述：Queue 和 Stack 有一些类似，不同的是 Stack 是先进后出，而 Queue 是先进先出。
// Javascript 中的 Array 已经具备了 Queue 的一些特性，所以我们可以借助 Array 实现一个Queue类型。

function Queue() {
  var items = [] // 存储数据

  // 向队列尾部添加一个元素
  this.enqueue = function (item) {
    items.push(item)
  }

  // 移除队列头部的元素
  this.dequeue = function () {
    return items.shift()
  }

  // 返回队列头部的元素
  this.head = function () {
    return items[0]
  }

  // 返回队列尾部的元素
  this.tail = function () {
    return items[items.length - 1]
  }

  // 返回队列大小
  this.size = function () {
    return items.length
  }

  // clear
  this.clear = function () {
    items = []
  }

  // isEmpty 判断是否为空队列
  this.isEmpty = function () {
    return items.length == 0
  }
}

let queue = new Queue()

queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
queue.dequeue()

console.log(queue.head())
console.log(queue.size())
