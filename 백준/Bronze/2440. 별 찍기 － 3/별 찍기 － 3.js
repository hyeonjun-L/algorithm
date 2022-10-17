let fs = require("fs");
let input = Number(fs.readFileSync("/dev/stdin").toString())
let answer = []

for(let i = input; i > 0 ; i--){
    answer[answer.length] = '*'.repeat(i)
}

console.log(answer.join('\n'))