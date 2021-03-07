// https://www.cxyxiaowu.com/1959.html
// 常数阶 O(1)
// 线性阶 O(n)
// 平方阶 O(n²)
// 对数阶 O(logn)
// 线性对数阶 O(nlogn)

// 大小比较 O(1) < O(logn) < O(n) < O(nlogn) < O(n^2) < O(n^3) < O(2^n)

// ================================= O(1) =================================
// 无论代码执行了多晒次，其他区域不会影响到操作，这个代码的时间复杂度都是O(1)。
// 一般情况下是程序中没有 循环、递归 重复性的操作。
function swap(prev, next) {
  let temp = prev
  prev = next
  next = temp
}

// ================================= O(n) =================================
// 下面的代码中，for 循环里面的代码会执行 n 遍，所以它消耗的时间是跟随 n 的变化而变化。
function sumOn(n) {
  let ret = 0
  for (i = 0; i < n; i++) {
    ret += i
  }
  return ret
}

// ================================= O(n²) =================================
// 当存在双重循环的时候，即把 O(n) 的代码再嵌套循环一遍。
function sumOn2(n) {
  let ret = 0
  for (i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      ret += j
    }
  }
  return ret
}

// 当然并不是所有的双重循环都是 O(n²)，比如下面这段输出 30n 次。
function sumOn(n) {
  let ret = 0
  for (i = 0; i < n; i++) {
    for (let j = 0; j < 30; j++) {
      ret += j
    }
  }
  return ret
}

// ================================= O(logn) =================================
// 在每次循环中成倍减少，就是越循环越少。如 二分查找法
function intToString(num) {
  let s = ""

  // n 经过几次“除以10”的操作后，等于0
  while (num) {
    s += "0" + (num % 10)
    num /= 10
  }

  return s
}

// ================================= O(nlogn) =================================
// 将时间复杂度为 O(logn) 的代码循环 N 遍的话，那么它的时间复杂度就是 n * O(logn)
function intToStringN(m) {
  let s = ""
  for (let i = 0; i < m; i++) {
    s += intToString(i)
  }
}
