const fs = require("fs");
const input = fs.readFileSync('/dev/stdin').toString()
let answer = []
let line = 0

for(let i = 0; i < Math.ceil(input.length/10); i++){
    answer[i] = input.substring(0 + line,10 + line)
    line += 10
    }

console.log(answer.join('\n'))