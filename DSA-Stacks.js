class _Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  push(data) {
    // If the stack is empty
    if (this.top === null) {
      // Make a new node with next set to null
      this.top = new _Node(data, null);
      return this.top;
    }
    // Make a new node with next set to current top
    const node = new _Node(data, this.top);
    // Set top to the newly created node
    this.top = node;
  }

  pop() {
    // Store current top in tmp variable
    const node = this.top;
    // Set current top to the next item
    this.top = node.next;
    return node.data;
  }
}

function peek(stack) {
  stack.top === null
    ? console.log(`STACK IS EMPTY`)
    : console.log(`TOP ITEM = "${stack.top.data}"`);
}

function isEmpty(stack) {
  // for some reason this isn't working
  stack.top === null ? true : false;
}

function display(stack) {
  const tempArray = [];
  if (!stack.top) {
    console.log(`error: STACK IS EMPTY`);
    return;
  }

  let node = stack.top;
  let trigger = true;
  while (trigger) {
    if (node.next) {
      tempArray.push(node.data);
      node = node.next;
    } else {
      tempArray.push(node.data);
      trigger = false;
    }
  }
  console.log(tempArray.join(", "));
}

function makeStack() {
  const starTrek = new Stack();
  starTrek.push("Kirk");
  starTrek.push("Spock");
  starTrek.push("McCoy");
  starTrek.push("Scotty");
  peek(starTrek);
  display(starTrek);
  return starTrek;
}
