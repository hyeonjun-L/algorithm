const fs = require("fs")
let input = fs.readFileSync("/dev/stdin").toString().split('\n')
const inputNX = input[0].toString().split(' ').map((item) => +item);
input = input[1].toString().split(' ').map((item) => +item);
const inputTestCase = []

const testCase = {
    N: inputNX[0],
    X: inputNX[1],
    arr: input,
  }
solution(testCase['N'],testCase['X'],testCase['arr'])

function solution(N,X,arr) {
    console.log(arr.filter(value => X > value).join(' '))
}