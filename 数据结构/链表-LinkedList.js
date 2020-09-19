// 概念：链表是一种链式数据结构，链上的每个节点包含两种信息：节点本身的数据和指向下一个节点的指针(next())。

// 链表中的节点
class Node {
  constructor(element) {
    // 节点中的数据
    this.element = element
    // 指向下一个节点的指针
    this.next = null
  }
}

// 链表结构
class LinkedList {
  constructor() {
    this.length = 0
    // 链表头
    this.head = null
  }

  // 打印
  print() {
    let cur = this.head
    let ret = []

    while (cur) {
      ret.push(cur.element)
      cur = cur.next
    }

    console.log(this.length, ret.join("===>"))
  }

  // 添加
  add(element) {
    let node = new Node(element)
    let cur = this.head
    // 如果第一次添加，当做头
    if (this.head === null) {
      this.head = node
    } else {
      // 判断当前节点有没有 next，直到找到没有 next，就是最后一位
      while (cur.next) {
        cur = cur.next
      }
      cur.next = node
    }
    // 记录长度
    this.length++
  }

  // 删除
  remove(element) {
    let cur = this.head
    let prev
    // 如果是头，头部 = 后续的节点
    if (cur.element === element) {
      this.head = cur.next
    } else {
      while (cur.element !== element) {
        // 上一个节点
        prev = cur
        // 当前节点
        cur = cur.next
      }
      // 把上个节点的 next 指向 当前节点的 next, 把当前节点给断掉了
      prev.next = cur.next
    }
    this.length--
  }

  // 判断节点
  indexOf(element) {
    let cur = this.head
    let index = 0
    while (cur) {
      index++
      // 如果相等返回当前索引
      if (cur.element === element) {
        return index
      }
      cur = cur.next
    }
    return -1
  }

  // 根据索引查询节点
  elementAt(index) {
    let cur = this.head
    let count = 0
    while (count < index) {
      count++
      cur = cur.next
    }
    return cur.element
  }

  // 根据索引添加
  addAt(index, element) {
    let node = new Node(element)
    let cur = this.head
    let ind = 0
    let prev
    // 如果 = 0； 新节点的 next = 头部， 头部 = 新节点
    if (index === 0) {
      node.next = cur
      this.head = node
    } else {
      // 记录上次节点和当前节点
      while (ind < index) {
        ind++
        prev = cur
        cur = cur.next
      }
      // 新节点的 next = 当前节点
      node.next = cur
      // 上个节点的 next = 新节点，这样就在上个节点和当前节点中间插入了一个。
      prev.next = node
    }
    this.length++
  }

  // 根据索引删除
  removeAt(index) {
    let cur = this.head
    let ind = 0
    let prev
    if (index === 0) {
      this.head = cur.next
    } else {
      while (ind < index) {
        ind++
        prev = cur
        cur = cur.next
      }
      // 把上个节点的 next 指向 当前节点的 next, 把当前节点给断掉了
      prev.next = cur.next
    }
    this.length--
  }
}

let linkedList = new LinkedList()

// add
linkedList.add("嘻嘻")
linkedList.add("哈哈")
linkedList.add("啦啦")
linkedList.print() // 嘻嘻===>哈哈===>啦啦

// remove
linkedList.remove("哈哈")
linkedList.add("哈哈")
linkedList.print() // 嘻嘻===>啦啦===>哈哈

// indexOf
console.log(linkedList.indexOf("啦啦")) // 2
console.log(linkedList.indexOf("哇哇")) // -1

// elementAt
console.log(linkedList.elementAt(0)) // 嘻嘻
console.log(linkedList.elementAt(2)) // 哈哈

// addAt
linkedList.addAt(2, "哦哦")
linkedList.addAt(3, "嘤嘤")
linkedList.print() // 嘻嘻===>啦啦===>哦哦===>嘤嘤===>哈哈

// removeAt
linkedList.removeAt(3)
linkedList.print() // 嘻嘻===>啦啦===>哦哦===>哈哈
