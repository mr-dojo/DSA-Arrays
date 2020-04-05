class _QueueNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
  }
  enqueue(value) {
    const node = new _QueueNode(value);
    if (this.first === null) {
      this.first = node;
    }
    if (this.last) {
      // Set the new node next in the queue (next position in the array)
      this.last.next = node;
    }
    this.last = node;
  }
  dequeue() {
    if (this.first === null) {
      return;
    }
    const node = this.first;
    this.first = this.first.next;
    if (node === this.last) {
      this.last = null;
    }
    return node.value;
  }
}

function makeQueue() {
  const starTrekQ = new Queue();
  starTrekQ.enqueue("Kirk");
  starTrekQ.enqueue("Spock");
  starTrekQ.enqueue("Uhura");
  starTrekQ.enqueue("Sulu");
  starTrekQ.enqueue("Checkov");
  console.log(starTrekQ);
}
