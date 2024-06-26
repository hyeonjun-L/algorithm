import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

class Tree {
  constructor(tree) {
    this.tree = tree;
    this.result = [];
  }

  prefix(target) {
    const { tree, result } = this;
    if (!tree[target]) return;

    result.push(tree[target]);
    this.prefix(target * 2);
    this.prefix(target * 2 + 1);
  }

  infix(target) {
    const { tree, result } = this;
    if (!tree[target]) return;

    this.infix(target * 2);
    result.push(tree[target]);
    this.infix(target * 2 + 1);
  }

  postfix(target) {
    const { tree, result } = this;
    if (!tree[target]) return;

    this.postfix(target * 2);
    this.postfix(target * 2 + 1);
    result.push(tree[target]);
  }

  showResult() {
    console.log(this.result);
    this.result = [];
  }
}

async function main() {
  const tree = new Tree(Array.from({ length: 16 }, (_, i) => i * 1));
  const rl = readline.createInterface({ input, output });
  console.log(tree);
  while (true) {
    console.log(
      "순회할 노드의 번호를 입력해주세요. 0을 입력하면 프로그램이 종료됩니다."
    );
    const nodeNum = Number(await rl.question("> "));
    if (!nodeNum) break;

    console.log("------ 전위 순회 --------");
    tree.prefix(nodeNum);
    tree.showResult();

    console.log("------ 중위 순회 --------");
    tree.infix(nodeNum);
    tree.showResult();

    console.log("------ 후위 순회 --------");
    tree.postfix(nodeNum);
    tree.showResult();
  }

  rl.close();
}

main();

// class Node {
//   constructor(value = "") {
//     this.value = value;
//     this.complete = ""; // 최종 문자열
//     this.children = new Map();
//   }
// }

// class Trie {
//   constructor() {
//     this.root = new Node();
//   }

//   /**
//    * 트라이에 새로운 문자열을 추가합니다.
//    * @param {string} string
//    */
//   insert(string) {
//     let currentNode = this.root;

//     for (const char of string) {
//       if (!currentNode.children.has(char)) {
//         currentNode.children.set(char, new Node(currentNode.value + char));
//       }

//       currentNode = currentNode.children.get(char);
//     }

//     currentNode.complete = currentNode.value;
//   }

//   /**
//    * 트라이에 해당 문자열이 들어있는지 확인합니다.
//    * 있다면 그 노드를, 없다면 undefined를 반환합니다.
//    * @param {string} string
//    * @returns Node | undefined
//    */
//   find(string) {
//     let currentNode = this.root;

//     for (const char of string) {
//       if (!currentNode.children.has(char)) return undefined;
//       currentNode = currentNode.children.get(char);
//     }

//     return currentNode;
//   }

//   /**
//    * 트라이에 해당 문자열로 시작하는 모든 문자열을 배열로 가져옵니다.
//    * 트라이에 해당 문자열이 존재하지 않는다면 undefined를 반환합니다.
//    * @param {string} string
//    * @returns array | undefined
//    */
//   autoComplete(string) {
//     const result = [];
//     const targetNode = this.find(string);
//     if (!targetNode) return undefined;

//     const traverse = (node) => {
//       const { complete, children } = node;

//       if (complete) result.push(complete);
//       for (const [_, nextNode] of children) {
//         traverse(nextNode);
//       }
//     };

//     traverse(targetNode);
//     return result;
//   }
// }

// function main() {
//   const trie = new Trie();

//   trie.insert("hello");
//   trie.insert("hell");
//   trie.insert("high");
//   trie.insert("hyper");

//   trie.insert("by");
//   console.log(trie.autoComplete("hell"));
// }

// main();
