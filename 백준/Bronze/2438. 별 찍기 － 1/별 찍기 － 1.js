const fs = require("fs")
let input = Number(fs.readFileSync("/dev/stdin"))
answer = []

for(let i =1; i <= input; i++) answer[i-1] = '*'.repeat(i)
console.log(answer.join("\n"))