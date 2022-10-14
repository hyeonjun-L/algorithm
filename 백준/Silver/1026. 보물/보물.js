const fs = require("fs")
const input = fs.readFileSync("/dev/stdin").toString().replace(/\r/g,'').split('\n') //"/dev/stdin"
let N = Number(input[0])
let A = input[1].toString().split(' ').map(Number).sort((a,b) => a - b)
let B = input[2].toString().split(' ').map(Number)
let answer = 0


for(let i = 0; i < N; i++){
    let maxValue = Math.max.apply(null, B)
    answer += maxValue * A[i]
    B.splice(B.indexOf(maxValue),1)
}

console.log(answer)