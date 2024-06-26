let fs = require("fs");
let input = Number(fs.readFileSync(__dirname + "/input.txt").toString())
let answer = []

for(let i = input; i > 0 ; i--){
    answer[answer.length] = '*'.repeat(i)
}

console.log(answer.join('\n'))