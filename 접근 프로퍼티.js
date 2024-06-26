// class Node {
//   constructor(value = "") {
//     this.value = value;
//     this.children = {};
//     this.end = false;
//   }
// }

// class Trie {
//   constructor() {
//     this.root = new Node(); //루트는 항상 비어있어야한다.
//   }

//   insert(string) {
//     let curr = this.root;
//     for (let char of string) {
//       if (!curr.children[char]) {
//         curr.children[char] = new Node(curr.value + char);
//       }
//       curr = curr.children[char];
//     }
//     curr.end = true;
//   }

//   autoComplete(string) {
//     let curr = this.root;
//     let queue = [];
//     let saveData = [];
//     for (let char of string) {
//       if (curr.children[char]) {
//         curr = curr.children[char];
//       } else {
//         return [];
//       }
//     }

//     queue.push(curr);

//     while (queue.length) {
//       curr = queue.shift();
//       if (curr.end) saveData.push(curr.value);
//       for (let obj in curr.children) {
//         if (curr.children[obj]) queue.push(curr.children[obj]);
//       }
//     }
//     return saveData;
//   }
// }

// const trie = new Trie();
// trie.insert("can");
// trie.insert("cans");
// trie.insert("cansas");
// trie.insert("cansasdasd");

// console.log(trie.autoComplete("cap"));

// console.log(Object.getOwnPropertyDescriptor(function () {}, "__proto__"));

const person = {
  firstName: "tt",
  lastName: "bb",

  set change(name) {
    this.firstName = name;
  },
};

Object.freeze(person);

console.log(person);
person.change = "aa";
console.log(person);

const person2 = {};

Object.defineProperties(person2, {
  firstName: {
    value: "하하",
    writable: false,
    enumerable: true,
    configurable: false,
  },
  lastName: {
    value: "쿠쿠",
    writable: true,
    enumerable: true,
    configurable: false,
  },

  changeName: {
    set(name) {
      this.firstName = name;
      this.lastName = name;
    },
  },
});

console.log(person2);
person2.changeName = "캬캬";
console.log(person2);

const person3 = {
  _firstName: "tt",
  _lastName: "bb",

  get firstName() {
    return this._firstName;
  },

  set firstName(name) {
    this._firstName = name;
  },

  get lastName() {
    return this._lastName;
  },

  set lastName(name) {
    this._lastName = name;
  },
};

person3._firstName = "허허";
console.log(person3);
