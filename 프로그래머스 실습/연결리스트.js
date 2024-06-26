// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//     this.prev = null;
//   }
// }

// class DoublyLinkedList {
//   constructor() {
//     this.head = null;
//     this.tail = null;
//   }

//   find(value) {
//     let currNode = this.head;
//     while (currNode !== null) {
//       if (currNode.value === value) {
//         return currNode;
//       }
//       currNode = currNode.next;
//     }
//     return null;
//   }

//   append(newValue) {
//     console.log(this);
//     const newNode = new Node(newValue);
//     if (this.head === null) {
//       this.head = newNode;
//       this.tail = newNode;
//     } else {
//       newNode.prev = this.tail;
//       this.tail.next = newNode;
//       this.tail = newNode;
//     }
//   }

//   insert(node, newValue) {
//     if (node === null) {
//       return;
//     }
//     const newNode = new Node(newValue);
//     newNode.next = node.next;
//     newNode.prev = node;
//     if (node.next !== null) {
//       node.next.prev = newNode;
//     }
//     node.next = newNode;
//   }

//   remove(value) {
//     let currNode = this.head;
//     while (currNode !== null) {
//       if (currNode.value === value) {
//         if (currNode.prev === null) {
//           this.head = currNode.next;
//         } else {
//           currNode.prev.next = currNode.next;
//         }
//         if (currNode.next === null) {
//           this.tail = currNode.prev;
//         } else {
//           currNode.next.prev = currNode.prev;
//         }
//         break;
//       }
//       currNode = currNode.next;
//     }
//   }

//   display() {
//     let currNode = this.head;
//     let displayString = "[";
//     while (currNode !== null) {
//       displayString += `${currNode.value}, `;
//       currNode = currNode.next;
//     }
//     displayString = displayString.substr(0, displayString.length - 2);
//     displayString += "]";
//     console.log(displayString);
//   }
// }

class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}
class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  append(newValue) {
    console.log(this);
    const newNode = new Node(newValue); // 1)
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode; // 2)
      newNode.prev = this.tail;
      this.tail = newNode; // 3)
    }
  }

  find(value) {
    let currNode = this.head;
    while (currNode.value !== value) {
      currNode = currNode.next;
    }
    return currNode;
  }

  findReverse(value) {
    let currNode = this.tail;
    while (currNode.value !== value) {
      currNode = currNode.prev;
    }
    return currNode;
  }

  insert(node, newValue) {
    const newNode = new Node(newValue);
    newNode.next = node.next;
    node.next = newNode;
  }

  remove(value) {
    let prevNode = this.head;
    while (prevNode.next.value !== value) {
      prevNode = prevNode.next;
    }

    if (prevNode.next !== null) {
      prevNode.next = prevNode.next.next;
    }
  }
}

const doublylinkedList = new DoublyLinkedList();
doublylinkedList.append(1);
doublylinkedList.append(2);
doublylinkedList.append(3);
doublylinkedList.append(4);
doublylinkedList.append(5);

// class SinglyLinkedList {
//   constructor() {
//     this.head = null;
//     this.tail = null;
//   }

//   find(value) {
//     let currNode = this.head;
//     while (currNode.value !== value) {
//       currNode = currNode.next;
//     }
//     return currNode;
//   }

//   append(newValue) {
//     const newNode = new Node(newValue);
//     if (this.head === null) {
//       this.head = newNode;
//       this.tail = newNode;
//     } else {
//       this.tail.next = newNode;
//       this.tail = newNode;
//     }
//   }

//   insert(node, newValue) {
//     const newNode = new Node(newValue);
//     newNode.next = node.next;
//     node.next = newNode;
//   }

//   remove(value) {
//     let prevNode = this.head;
//     while (prevNode.next.value !== value) {
//       prevNode = prevNode.next;
//     }

//     if (prevNode.next !== null) {
//       prevNode.next = prevNode.next.next;
//     }
//   }

//   display() {
//     let currNode = this.head;
//     let displayString = "[";
//     while (currNode !== null) {
//       displayString += `${currNode.value}, `;
//       currNode = currNode.next;
//     }
//     displayString = displayString.substr(0, displayString.length - 2);
//     displayString += "]";
//     console.log(displayString);
//   }

//   size() {
//     let size = 0;
//     let currNode = this.head;
//     while (currNode !== null) {
//       size++;
//       currNode = currNode.next;
//     }
//     return size;
//   }
// }

// const linkedList = new SinglyLinkedList();

// linkedList.append(1);
// linkedList.append(2);
// linkedList.append(3);
// linkedList.append(4);
// linkedList.append(5);
// // console.log(linkedList.size());

// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }

// class CircularLinkedList {
//   constructor() {
//     this.head = null;
//     this.tail = null;
//   }

//   find(value) {
//     if (this.head === null) {
//       return null;
//     }
//     let currNode = this.head;
//     do {
//       if (currNode.value === value) {
//         return currNode;
//       }
//       currNode = currNode.next;
//     } while (currNode !== this.head);
//     return null;
//   }

//   append(newValue) {
//     const newNode = new Node(newValue);
//     if (this.head === null) {
//       this.head = newNode;
//       this.tail = newNode;
//       newNode.next = newNode; // Make it circular
//     } else {
//       newNode.next = this.head;
//       this.tail.next = newNode;
//       this.tail = newNode;
//     }
//   }

//   insert(node, newValue) {
//     const newNode = new Node(newValue);
//     newNode.next = node.next;
//     node.next = newNode;
//   }

//   remove(value) {
//     if (this.head === null) {
//       return;
//     }
//     if (this.head.value === value) {
//       if (this.head === this.tail) {
//         this.head = null;
//         this.tail = null;
//       } else {
//         this.head = this.head.next;
//         this.tail.next = this.head;
//       }
//       return;
//     }
//     let currNode = this.head;
//     while (currNode.next !== this.head) {
//       if (currNode.next.value === value) {
//         currNode.next = currNode.next.next;
//         return;
//       }
//       currNode = currNode.next;
//     }
//   }

//   display() {
//     if (this.head === null) {
//       console.log("[]");
//       return;
//     }
//     let currNode = this.head;
//     let displayString = "[";
//     do {
//       displayString += `${currNode.value}, `;
//       currNode = currNode.next;
//     } while (currNode !== this.head);
//     displayString = displayString.substr(0, displayString.length - 2);
//     displayString += "]";
//     console.log(displayString);
//   }

//   size() {
//     let size = 0;
//     if (this.head === null) {
//       return size;
//     }
//     let currNode = this.head;
//     do {
//       size++;
//       currNode = currNode.next;
//     } while (currNode !== this.head);
//     return size;
//   }
// }

// const circularLinkedList = new CircularLinkedList();
