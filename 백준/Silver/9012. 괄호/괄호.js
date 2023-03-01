const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function solution(s) {
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    const bracket = s[i];
    if (bracket === "(") {
      stack.push(bracket);
    } else if (bracket === ")") {
      if (stack.pop() !== "(") {
        return "NO";
      }
    }
  }
  if (stack.length > 0) {
    return "NO";
  }
  return "YES";
}

const answer = input.slice(1).map(solution);
console.log(answer.join("\n"));