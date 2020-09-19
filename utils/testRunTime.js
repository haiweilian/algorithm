function testRunTime(fn) {
  let start = new Date()
  let end = null
  fn()
  end = new Date()
  console.log(`运行时间: ${(end - start) / 1000}秒`)
}

module.exports = testRunTime
