let fs = require("fs");
let input = Number(fs.readFileSync(__dirname + "/input.txt").toString())
answer = []
for(let i = input; i >= 1 ; i--){
    answer[answer.length] = i
}

console.log(answer.join('\n'))