const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number)
input.shift()
let answer = [1, 2, 4, 7, 13, 24, 44, 81, 149, 274]
let result = []
for(let i = 0; i < input.length; i++){
    result[result.length] = answer[input[i] - 1]
}

console.log(result.join('\n'))