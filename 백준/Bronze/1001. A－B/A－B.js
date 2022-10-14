const fs = require("fs")
let input = fs.readFileSync('/dev/stdin').toString().split(' ').map((item) => +item);

const testCase = {
    A: input[0],
    B: input[1],
  }

  solution(testCase['A'],testCase['B'])

  function solution(A,B) {
    console.log(A - B)
}