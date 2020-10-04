// https://zhuanlan.zhihu.com/p/20669077
const testRunTime = require("../utils/testRunTime")

// 一个一个拼接
let leftpadslow = function (str, length, ch) {
  let len = length - str.length
  let total = ""
  while (len) {
    len--
    total += ch
  }
  total += str
  return total
}

// 二分法
let leftpad = function (str, length, ch) {
  let len = length - str.length
  let total = ""
  while (len) {
    if (len % 2 === 1) {
      total += ch
    }
    if (len === 1) {
      return total + str
    }
    ch += ch
    len = parseInt(len / 2)
  }
}

leftpad("hello", 10, "0")

testRunTime(function () {
  for (let i = 0; i < 10000; i++) {
    leftpadslow("hello", 100000, "0")
  }
})

testRunTime(function () {
  for (let i = 0; i < 10000; i++) {
    leftpad("hello", 100000, "0")
  }
})
