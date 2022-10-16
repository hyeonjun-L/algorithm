const fs = require("fs");
const input = fs.readFileSync('/dev/stdin').toString().split(' ').map(Number)
const [A, B, C] = input
let answer = []

answer[0] = (A+B)%C
answer[1] = ((A%C) + (B%C))%C
answer[2] = (A*B)%C
answer[3] = ((A%C) * (B%C))%C

console.log(answer.join('\n'))
