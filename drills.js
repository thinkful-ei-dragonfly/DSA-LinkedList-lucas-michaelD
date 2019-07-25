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

// Exercise 3
function display(list) {
  let displayList = []

  function findNext(item) {
    if (item.next) {
      displayList.push(item.next.value)
      findNext(item.next)
    }
    return null
  }
  findNext(list.head)
  return displayList
}
function size(list) {
  let counter = 0

  function findNext(item) {
    if (item.next) {
      counter +=1
      findNext(item.next)
    }
    return null
  }
  findNext(list.head)
  return counter
}
function isEmpty(list) {
  return !list.head
  // if "!list.head" is a true statement, it returns true.
  // otherwise, it has a head and it's false. it's not empty
}
function findPrevious(list, target) {
  let prevItem = ''

  function findNext(item) {
    if (item.next) {
      if (item.next.value === target) {
        prevItem = item.value
        return
      }
      findNext(item.next)
    }
    return null
  }
  findNext(list.head)
  return prevItem
}
function findLast(list) {
  let lastItem = ''

  function findNext(item) {
    if (item.next) {
      findNext(item.next)
    } else {
      lastItem = item.value
      return
    }

  }
  findNext(list.head)
  return lastItem
}
// Exercise 3

function main() {
  const SLL = new LinkedList();

  SLL.insertFirst('Apollo');
  SLL.insertLast('Boomer');
  SLL.insertLast('Helo');
  SLL.insertLast('Husker');
  SLL.insertLast('Starbuck');
  SLL.insertLast('Tauhida');
  console.log('---------------------------------------------');
  console.log('Attempting to remove an item not in the link list: ');
  SLL.remove('squirrel') // this logs a 'Item not found' and returns null
  SLL.insertBefore('Athena', 'Boomer');
  SLL.insertAfter('Hotdog', 'Helo');
  SLL.insertAt('Kat', 3)
  SLL.remove('Tauhida')


  console.log('---------------------------------------------');
  console.log('Display the list');
  console.log(`${display(SLL)}`);
  console.log('---------------------------------------------');
  console.log('Count the size of the list');
  console.log(`The size of SLL is ${size(SLL)} nodes long`)
  console.log('---------------------------------------------');
  console.log(`Is SLL empty? The answer is: ${isEmpty(SLL)}`);
  console.log('---------------------------------------------');
  console.log(`The _Node before 'Apollo' is ${findPrevious(SLL, 'Apollo')}`)
  console.log(`The _Node before 'Helo' is ${findPrevious(SLL, 'Helo')}`)
  console.log(`The _Node before 'Starbuck' is ${findPrevious(SLL, 'Starbuck')}`)
  console.log('---------------------------------------------');
  console.log(`The last item in SLL is ${findLast(SLL)}`);
  console.log('---------------------------------------------');

}
main();


// display()
