/*
 * @lc app=leetcode.cn id=622 lang=javascript
 *
 * [622] 设计循环队列
 */

// @lc code=start
/**
 * @param {number} k
 */
var MyCircularQueue = function (k) {
  this.k = k // 队列长度
  this.queue = new Array(k) // 指定长度的队列
  this.head = 0 // 队首索引
  this.tail = 0 // 队尾索引
  this.count = 0 // 已入队的元素数量
}

/**
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function (value) {
  if (this.isFull()) {
    return false
  }

  // 往队尾增加一个元素
  this.queue[this.tail] = value
  // 让队尾往后移动一位。(取余操作时为了当假溢出的时候重头开始，达到循环效果)
  this.tail = (this.tail + 1) % this.k
  // 队列里的元素数量加一
  this.count += 1

  return true
}

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function () {
  if (this.isEmpty()) {
    return false
  }

  // 让队首往后移动一位，代表出队了一个。
  this.head = (this.head + 1) % this.k
  // 队列里的元素数量减一
  this.count -= 1

  return true
}

/**
 * @return {number}
 */
MyCircularQueue.prototype.Front = function () {
  if (this.isEmpty()) {
    return -1
  }

  return this.queue[this.head]
}

/**
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function () {
  if (this.isEmpty()) {
    return -1
  }

  // 队首的索引 + 元素个数 - 1 = 队尾的索引
  return this.queue[(this.head + this.count - 1) % this.k]
}

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function () {
  return this.count === 0
}

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function () {
  return this.count === this.k
}

/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */
// @lc code=end

// ===================================================================
// ========================== @test ==================================
// ===================================================================
let circularQueue = new MyCircularQueue(3) // 设置长度为 3
console.log(circularQueue.enQueue(1)) // 返回 true
console.log(circularQueue.enQueue(2)) // 返回 true
console.log(circularQueue.enQueue(3)) // 返回 true
console.log(circularQueue.enQueue(4)) // 返回 false，队列已满
console.log(circularQueue.Rear()) // 返回 3
console.log(circularQueue.isFull()) // 返回 true
console.log(circularQueue.deQueue()) // 返回 true
console.log(circularQueue.enQueue(4)) // 返回 true
console.log(circularQueue.Rear()) // 返回 4
