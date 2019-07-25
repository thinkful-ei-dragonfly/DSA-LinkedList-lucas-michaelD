/* eslint-disable no-console */
class _Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(item) {
    this.head = new _Node(item, this.head);
  }

  insertLast(item) {
    if (this.head == null) {
      this.head = this.insertFirst(item);
    } else {
      let tempNode = this.head;
      while (tempNode.next !== null) {
        tempNode = tempNode.next;
      }
      tempNode.next = new _Node(item, null);
    }
  }

  find(item) {
    // starting at the head here aka arr[0]
    let currNode = this.head;
    // If the list is empty
    if (!this.head) {
      return null;
    }

    // Check if the value matches
    while (currNode.value !== item) {
      // return null if it's the end of the list and the item is not in the list
      if (currNode.next === null) {
        return null;
      } else {
        // keep going
        currNode = currNode.next;
      }
    }
    return currNode;
  }

  remove(item) {
    // if it's empty
    if (!this.head) {
      return null;
    }

    // if the node to be removed is head,
    // make the next item the head
    if (this.head.value === item) {
      this.head = this.head.next;
      return;
    }

    // start at the head
    let currNode = this.head;
    // keep track of previous
    // both start at 0
    let previousNode = this.head;

    while (currNode !== null && currNode.value !== item) {
      // previous node gets saved as current node
      // current node's value goes up to the next
      previousNode = currNode;
      currNode = currNode.next;
    }
    if (currNode === null) {
      console.log('Item not found');
      return;
    }
    previousNode.next = currNode.next;
  }

  insertBefore(item, target) {
    // if list is empty
    if (!this.head) {
      console.log(
        'This link list is empty, therefore nothing to insert before'
      );
      // this.head = item -> we "could" just make a new linklist with the item as the head
      // but this might not be what the user expects?
      return null;
    }
    // if the target is the head
    // make the new item the new head
    if (this.head.value === target) {
      item.next = this.head;
      this.head = item;
    }

    let targetNode = this.head;
    let previousNode = this.head;

    while (targetNode !== null && targetNode.value != target) {
      // if this was sorted, we could do something like targetNode.value < target
      previousNode = targetNode;
      targetNode = targetNode.next;
    }
    if (targetNode === null) {
      console.log(`${target} not found. Could not place ${item} before it`);
      return;
    }
    let newItem = new _Node(item, targetNode);
    previousNode.next = newItem;
  }

  insertAfter(item, target) {
    // is list empty
    if (!this.head) {
      console.log(
        'This link list is empty, therefore nothing to insert before'
      );
      // this.head = item -> we "could" just make a new linklist with the item as the head
      // but this might not be what the user expects?
      return null;
    }
    if (this.head.value === target && this.head.next === null) {
      this.head.next = new _Node(item, null);
    }
    let targetNode = this.head;
    while (targetNode !== null && targetNode.value !== target) {
      targetNode = targetNode.next;
    }
    if (targetNode === null) {
      console.log('Cannot find the target');
      return null;
    }

    let newItem = new _Node(item, targetNode.next);
    targetNode.next = newItem;
  }


  insertAt(item, num) {
    // if it's empty
    if (!this.head) {
      console.log('This link list is empty, sorry');
      return null
    }
    let currentNode = this.head

    for (let counter = 1; counter <= num; counter++) {
      currentNode = currentNode.next
      if (counter === num) {
        this.insertBefore(item, currentNode.value)
      }
    }

    if (currentNode.value === null) {
      return null
    }

  }
}

function main() {
  const SLL = new LinkedList();

  // const itemsForList = ['Starbuck', 'Husker', 'Helo', 'Boomer', 'Apollo'];
  //
  // itemsForList.forEach(nodeItem => {
  //   SLL.insertFirst(nodeItem)
  // });
  // SLL.insertLast('Tauhida')
  //
  // SLL.remove('squirrel'); // This returns null
  //

  SLL.insertFirst('Apollo');
  SLL.insertLast('Boomer');
  SLL.insertLast('Helo');
  SLL.insertLast('Husker');
  SLL.insertLast('Starbuck');
  SLL.insertLast('Tauhida');
  // SLL.remove('squirrel') // this logs a 'Item not found' and returns null

  SLL.insertBefore('Athena', 'Boomer');
  SLL.insertAfter('Hotdog', 'Helo');
  SLL.insertAt('Kat', 3)
  // console.log(SLL.find('Boomer'));
  // console.log(SLL.find('Kat'));
  console.log('Before removing Tauhida');
  console.log(SLL.find('Starbuck'));
  console.log('---------------------------------------------');
  SLL.remove('Tauhida')
  console.log('AFTER removing tauhida');
  console.log(SLL.find('Starbuck'));

}
main();
