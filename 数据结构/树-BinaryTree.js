// 二叉树是树的一种特殊情况，每个节点最多有有两个子女，分别称为该节点的左子女和右子女。
// 就是说，在二叉树中，不存在度大于2的节点。二叉树的子树有左右之分，次序不能颠倒。

// 树节点
function BinTreeNode(data) {
  this.data = data
  this.leftChild = null // 左子树
  this.rightChild = null // 右子树
  this.parentNode = null // 父节点
}

// 二叉树
function BinaryTree() {
  let root = null // 根节点

  // 采用广义表表示的建立二叉树方法
  this.init_tree = function (string) {
    var stack = []
    var k = 0
    var new_node = null

    for (var i = 0; i < string.length; i++) {
      var item = string[i]
      if (item == "#") {
        break
      }
      if (item == "(") {
        stack.push(new_node)
        k = 1
      } else if (item == ")") {
        stack.pop()
      } else if (item == ",") {
        k = 2
      } else {
        new_node = new BinTreeNode(item)
        if (root == null) {
          root = new_node
        } else if (k == 1) {
          // 左子树
          var top_item = stack[stack.length - 1]
          top_item.leftChild = new_node
          new_node.parentNode = top_item
        } else {
          // 右子树
          var top_item = stack[stack.length - 1]
          top_item.rightChild = new_node
          new_node.parentNode = top_item
        }
      }
    }

    return root
  }

  // 获取根树
  this.get_root = function () {
    return root
  }

  // 中序遍历
  this.in_order = function (node) {
    if (node === null) {
      return
    }
    this.in_order(node.leftChild)
    console.log("in_order", node.data) // 中序遍历：输出在中间
    this.in_order(node.rightChild)
  }

  // 前序遍历
  this.pre_order = function (node) {
    if (node === null) {
      return
    }
    console.log("pre_order", node.data) // 前序遍历：输出在前面
    this.pre_order(node.leftChild)
    this.pre_order(node.rightChild)
  }

  // 后序遍历
  this.post_order = function (node) {
    if (node === null) {
      return
    }
    this.post_order(node.leftChild)
    this.post_order(node.rightChild)
    console.log("post_order", node.data) // 后序遍历：输出在后面
  }

  // 返回节点数量
  let tree_node_count = function (node) {
    // 左子树的的节点数量加上右子树的节点 在加上根节点
    if (!node) {
      return 0
    }
    let left_node_count = tree_node_count(node.leftChild)
    let right_node_count = tree_node_count(node.rightChild)
    return left_node_count + right_node_count + 1
  }
  this.size = function () {
    return tree_node_count(root)
  }

  // 返回树的高度
  let tree_height = function (node) {
    // 左子树的高度和右子树的高度取最大值，加上当前的高度 1
    if (!node) {
      return 0
    }
    let left_child_height = tree_height(node.leftChild)
    let right_child_height = tree_height(node.rightChild)
    if (left_child_height > right_child_height) {
      return left_child_height + 1
    } else {
      return right_child_height + 1
    }
  }
  this.height = function () {
    return tree_height(root)
  }

  // 查找节点data
  let find_node = function (node, data) {
    if (!node) {
      return null
    }
    if (node.data === data) {
      return node
    }
    // 查找左子树
    let left_res = find_node(node.leftChild, data)
    if (left_res) {
      return left_res
    }
    // 查找右子树
    return find_node(node.rightChild, data)
  }
  this.find = function (data) {
    return find_node(root, data)
  }
}

let binaryTree = new BinaryTree()
let tree = binaryTree.init_tree("A(B(D,E(G,)),C(,F))#")
console.log(tree)
// BinTreeNode {
//   data: 'A',
//   leftChild: BinTreeNode {
//     data: 'B',
//     leftChild: BinTreeNode {
//       data: 'D',
//       leftChild: null,
//       rightChild: null,
//       parentNode: [Circular]
//     },
//     rightChild: BinTreeNode {
//       data: 'E',
//       leftChild: [BinTreeNode],
//       rightChild: null,
//       parentNode: [Circular]
//     },
//     parentNode: [Circular]
//   },
//   rightChild: BinTreeNode {
//     data: 'C',
//     leftChild: null,
//     rightChild: BinTreeNode {
//       data: 'F',
//       leftChild: null,
//       rightChild: null,
//       parentNode: [Circular]
//     },
//     parentNode: [Circular]
//   },
//   parentNode: null
// }

let root = binaryTree.get_root()

binaryTree.in_order(root) // D B G E A C F
binaryTree.pre_order(root) // A B D E G C F
binaryTree.post_order(root) // D G E B F C A

console.log(binaryTree.size()) // 7

console.log(binaryTree.height()) // 4

console.log(binaryTree.find("B"))
