// 概述：Stack 的特点是先进后出
// 实现：实际上 JavaScript 的 Array 本身就具有栈和队列的特性，所以我们可以借助 Array 来实现它们。

class Stack {
  constructor() {
    this.items = []
  }

  // 入栈
  push(element) {
    this.items.push(element)
  }

  // 出栈
  pop() {
    this.items.pop()
  }

  // 末位
  peek() {
    return this.items[this.items.length - 1]
  }

  // 长度
  get length() {
    return this.items.length
  }
}

let stack = new Stack()

stack.push(1)
stack.push(2)
stack.push(3)
stack.pop()

console.log(stack.peek())
console.log(stack.length)
