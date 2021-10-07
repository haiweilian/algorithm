/*
 * @lc app=leetcode.cn id=933 lang=javascript
 *
 * [933] 最近的请求次数
 */

// @lc code=start

var RecentCounter = function () {
  this.task = []
}

/**
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function (t) {
  this.task.push(t)
  // 判断是否还在 3000 内，反之出队列
  while (this.task[0] < t - 3000) {
    this.task.shift()
  }
  return this.task.length
}

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */
// @lc code=end

// ===================================================================
// ========================== @test ==================================
// ===================================================================
var recentCounter = new RecentCounter()
console.log(recentCounter.ping(10))
console.log(recentCounter.ping(3000))
console.log(recentCounter.ping(3100))
console.log(recentCounter.ping(3200))
console.log(recentCounter.ping(3300))
