class _Node {
  constructor(value, next) {
    this.value = value
    this.next = next
  }
}

class LinkedList {
  constructor() {
    this.head = null
  }

  insertFirst(item) {
    this.head = new _Node(item, this.head)
  }

  insertLast(item) {
    if (this.head == null) {
      this.head = this.insertFirst(item)
    }
    else {
      let tempNode = this.head
      while (tempNode.next !== null) {
        tempNode = tempNode.next
      }
      tempNode.next = new _Node(item, null)
    }
  }

  find(item) {
    // starting at the head here aka arr[0]
    let currNode = this.head
    // If the list is empty
    if (!this.head) {
      return null
    }

    // Check if the value matches
    while (currNode.value !== item) {
      // return null if it's the end of the list and the item is not in the list
      if (currNode.next === null) {
        return null
      }
      else {
        // keep going
        currNode = currNode.next
      }
    }
    return currNode
  }

  remove(item) {
    // if it's empty
    if (!this.head) {
      return null
    }

    // if the node to be removed is head,
    // make the next item the head
    if (this.head.value === item) {
      this.head = this.head.next
      return
    }

    // start at the head
    let currNode = this.head
    // keep track of previous
    // both start at 0
    let previousNode = this.head

    while ((currNode !== null) && (currNode.value !== item)) {
      // previous node gets saved as current node
      // current node's value goes up to the next
      previousNode = currNode
      currNode = currNode.next
    }
    if (currNode === null) {
      console.log('Item not found');
      return
    }
    previousNode.next = currNode.next

  }

}
