// ============================================================================
// Implementation Exercise: Queue
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Queue and all of its methods below using a NODE implementation
// (your Queue should not contain any built-in JavaScript Arrays)
//
// ------------
// Constraints:
// ------------
//
// Make sure the time and space complexity of each is equivalent to those
// in the table provided in the Time and Space Complexity Analysis section
// of your Stack reading!
//
// -----------
// Let's Code!
// -----------

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  // FIFO - first in first out
  constructor() {
    this.front = undefined;
    this.back = undefined;
    this.length = 0;
  }
  enqueue(value) {
    const newNode = new Node(value);

    if (this.size() === 0) {
      this.back = newNode;
      this.front = newNode;
    } else if (this.size() >= 1) {
      // current queue: [node1: value, next->node2], [node2: value, next->null]
      // enqueue(value): [node2: next= null -> node3], [node3: value, next->null]
      // original this.back       // NEW this.back
      // grab this.back
      const originalBack = this.back;
      // reassign null (next) to newNode
      originalBack.next = newNode;
      this.back = newNode;
    }
    this.length++;
    return this.size();
  }

  dequeue() {
    let originalFront;
    if (this.size() === 0) {
      return null;
    } else if (this.size() === 1) {
      // [node1: value, next->null]
      // front/element one
      originalFront = this.front;
      this.front = null;
      this.back = null;
      this.length--;
    } else if (this.size() >= 2) {
      // reassign front pointer to node just behind front node
      // [node1: value, next->node2], [node2: value, next->node3], [node3: value, next->null]
      // front/first item-->remove         second item-->front           back/third item
      originalFront = this.front;
      const newNode = originalFront.next;
      originalFront.next = null;
      this.front = newNode;
      this.length--;
    }
    return originalFront.value;
  }

  size() {
    return this.length;
  }
}

exports.Node = Node;
exports.Queue = Queue;
