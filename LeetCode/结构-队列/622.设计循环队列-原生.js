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
  this.queue = [] // 队列
}

/**
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function (value) {
  if (this.isFull()) {
    return false
  } else {
    this.queue.push(value)
    return true
  }
}

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function () {
  if (this.isEmpty()) {
    return false
  } else {
    this.queue.shift()
    return true
  }
}

/**
 * @return {number}
 */
MyCircularQueue.prototype.Front = function () {
  if (this.isEmpty()) {
    return -1
  }
  return this.queue[0]
}

/**
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function () {
  if (this.isEmpty()) {
    return -1
  }
  return this.queue[this.queue.length - 1]
}

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function () {
  return this.queue.length === 0
}

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function () {
  return this.queue.length === this.k
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
