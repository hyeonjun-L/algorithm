let fs = require("fs");
let input = Number(fs.readFileSync(__dirname + "/input.txt").toString())
let answer = []

for(let i = 0; i < input; i++){
    answer[answer.length] = ' '.repeat(i) + '*'.repeat(input - i)
}

console.log(answer.join('\n'))