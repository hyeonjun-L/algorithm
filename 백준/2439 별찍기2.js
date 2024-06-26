let fs = require("fs");
let input = Number(fs.readFileSync(__dirname + "/input.txt").toString())
let answer = []

for(let i = input - 1; i >= 0 ; i--){
    answer[answer.length] = ' '.repeat(i) + '*'.repeat(input - i)
}

console.log(answer.join('\n'))