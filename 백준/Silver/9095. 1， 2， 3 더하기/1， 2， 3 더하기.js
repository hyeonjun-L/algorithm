const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number)
input.shift()
let answer = [1, 2, 4, 7, 13, 24, 44, 81, 149, 274]

for(let i = 0; i < input.length; i++){
    console.log(answer[input[i] - 1])
}