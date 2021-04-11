// 堆的特性：
// 1. 在想象面可以看做一个完全二叉树。即 k - 1 层都是满的，k 层满的或者从右到左连续缺少若干节点。

// 2. 在表现面操作的一直是一个连续的存储空间，在 JS 中用数组表示，按层依次存入。

// 3. 既然是一个数组，那么用数组怎么找到子节点或父节点呢？
// 假设数组中的索引从 0 开始，元素个数为 n, 在堆中给定索引为 i 的节点时。
// 如果 i = 0, 节点 i 是根节点，否则节点 i 的父节点为 (i - 1) / 2 。
// 如果 2 * i + 1 > n - 1, 则节点 i 无左节点，否则节点 i 的左节点为 2 * i + 1。
// 如果 2 * i + 2 > n - 1, 则节点 i 无右节点，否则节点 i 的右节点为 2 * i + 2。

// 4. 小顶堆 和 大顶堆
// 小顶堆，父节点小于等于它的左右子节点。
// 大顶堆，父节点大于等于它的左右子节点。

// https://juejin.cn/post/6869522782955405325
class Heap {
  constructor(compare) {
    this.arr = [0] // 下标从1开始好算，下标0废弃
    this.compare =
      typeof compare === "function" ? compare : this._defaultCompare
  }

  /**
   * 根据可迭代对象生成堆
   * @param {*} data iterable 对象
   * @param {*} compare
   */
  static heapify(data, compare = undefined) {
    let heap = new Heap(compare)
    for (let item of data) {
      heap.push(item)
    }
    return heap
  }

  push(item) {
    let { arr } = this
    arr.push(item)
    this._up(arr.length - 1)
    // console.log('push', item, arr.slice(1));
  }

  pop() {
    if (this.size === 0) return null //行为同Java的PriorityQueue
    let { arr } = this
    this._swap(1, arr.length - 1) // 末尾的换上来，堆顶放到最后等待返回
    let res = arr.pop()
    this._down(1) // 换上来的末尾尝试下沉
    // console.log('pop', arr.slice(1));
    return res
  }

  /**
   * 堆中元素数量
   */
  get size() {
    return this.arr.length - 1
  }

  /**
   * 返回堆顶元素
   */
  peek() {
    return this.arr[1]
  }

  /**
   * 上浮第k个元素
   * @param {int} k
   */
  _up(k) {
    let { arr, compare, _parent } = this
    // k 比它的父节点更靠近堆顶，应该继续上浮（k=1 表示已经到达堆顶）
    while (k > 1 && compare(arr[k], arr[_parent(k)])) {
      this._swap(_parent(k), k)
      k = _parent(k)
    }
  }

  /**
   * 下沉第k个元素
   * @param {int} k
   */
  _down(k) {
    let { arr, compare, _left, _right } = this
    let size = this.size
    // 如果沉到堆底，就沉不下去了
    while (_left(k) <= size) {
      let child = _left(k)
      if (_right(k) <= size && compare(arr[_right(k)], arr[child])) {
        child = _right(k) // 选择左右子节点中更靠近堆顶的，这样能维持下沉后原本的 left与right 之间的顺序关系
      }
      // 如果当前的k比子节点更靠近堆顶，不用下沉了
      if (compare(arr[k], arr[child])) return
      // 下沉
      this._swap(k, child)
      k = child
    }
  }

  _left(k) {
    return k * 2
  }
  _right(k) {
    return k * 2 + 1
  }
  _parent(k) {
    return Math.floor(k / 2)
  }

  /**
   * 交换位置
   * @param {int} i
   * @param {int} j
   */
  _swap(i, j) {
    let arr = this.arr
    ;[arr[i], arr[j]] = [arr[j], arr[i]]
  }

  /**
   * a是否比b更接近堆顶，默认为小顶堆
   * @param {*} a
   * @param {*} b
   * @return {boolean}
   */
  _defaultCompare(a, b) {
    return a < b
  }
}

let heap = new Heap()

heap.push(4)
heap.push(5)
heap.push(1)
console.log(heap.peek()) // 1
heap.pop()
console.log(heap.peek()) // 4
heap.pop()
console.log(heap.peek()) // 5
