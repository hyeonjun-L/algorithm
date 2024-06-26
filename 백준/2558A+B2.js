const fs = require("fs")
let input = fs.readFileSync(__dirname + "/input.txt").toString().split('\n').map((item) => +item) //"/dev/stdin"

const testCase = {
    A: input[0],
    B: input[1],
  }

  solution(testCase['A'],testCase['B'])

  function solution(A,B) {
    console.log(A + B)
}