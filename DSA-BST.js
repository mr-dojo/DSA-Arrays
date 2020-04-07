class BinarySearchTree {
  constructor(key = null, value = null, parent = null) {
    this.key = key;
    this.value = value;
    this.parent = parent;
    this.left = null;
    this.right = null;
  }

  insert(key, value) {
    if (this.key == null) {
      this.key = key;
      this.value = value;
    } else if (key < this.key) {
      if (this.left == null) {
        this.left = new BinarySearchTree(key, value, this);
      } else {
        this.left.insert(key, value);
      }
    } else if (key > this.key) {
      if (this.right == null) {
        this.right = new BinarySearchTree(key, value, this);
      } else {
        this.right.insert(key, value);
      }
    }
  }

  find(key) {
    if (this.key == key) {
      return this.value;
    } else if (key < this.key && this.left) {
      return this.left.find(key);
    } else if (key > this.key && this.right) {
      return this.right.find(key);
    } else {
      return new Error();
    }
  }

  remove(key) {
    if (this.key == key) {
      if (this.left && this.right) {
        const successor = this.right._findMin();
        this.key = successor.key;
        this.value = successor.value;
        successor.remove(successor.key);
      } else if (this.left) {
        this._replaceWith(this.left);
      } else if (this.right) {
        this._replaceWith(this.right);
      } else {
        this.replaceWith(null);
      }
    } else if (key < this.key && this.left) {
      this.left.remove(key);
    } else if (key > this.key && this.right) {
      this.right.remove(key);
    } else {
      throw new Error("Key Error");
    }
  }

  _replaceWith(node) {
    if (this.parent) {
      if (this == this.parent.left) {
        this.parent.left = node;
      } else if (this == this.parent.right) {
        this.parent.right = node;
      }

      if (node) {
        node.parent = this.parent;
      }
    } else {
      if (node) {
        this.key = node.key;
        this.value = node.value;
        this.right = node.right;
        this.left = node.left;
      } else {
        this.key = null;
        this.value = null;
        this.right = null;
        this.left = null;
      }
    }
  }

  _findMin() {
    if (!this.left) {
      return this;
    }
    return this.left._findMin();
  }
}

function makeBST() {
  const BST = new BinarySearchTree();
  BST.insert(3, "three");
  BST.insert(1, "one");
  BST.insert(4, "four");
  BST.insert(6, "six");
  BST.insert(9, "nine");
  BST.insert(2, "two");
  BST.insert(5, "five");
  BST.insert(7, "seven");
  return BST;
}

function makeBSTLetters() {
  const BST = new BinarySearchTree();
  BST.insert("E", "e");
  BST.insert("A", "a");
  BST.insert("S", "s");
  BST.insert("Y", "y");
  BST.insert("Q", "q");
  BST.insert("U", "u");
  BST.insert("E", "e");
  BST.insert("S", "s");
  BST.insert("T", "t");
  BST.insert("I", "i");
  BST.insert("O", "o");
  BST.insert("N", "n");
  console.log(BST.find("E"));
  BST.remove("Y");
  console.log(BST);
  return BST;
}

// Non-functioning binary search tree height checker
function checkHeight(BST) {
  leftHeight = 0;
  rightHeight = 0;
  if (BST.key == null) {
    return 0;
  } else {
    if (!BST.left && !BST.right) {
      if (leftHeight >= rightHeight) {
        return leftHeight;
      } else {
        return rightHeight;
      }
    }
    if (BST.left) {
      leftHeight++;
      checkHeight(BST.left);
    }
    if (BST.right) {
      rightHeight++;
      checkHeight(BST.right);
    }
  }
}
