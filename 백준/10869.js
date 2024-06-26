let fs = require("fs");
let input = fs.readFileSync(__dirname + "/input.txt").toString().split(' ').map(Number)
answer = []

answer[0] = input[0] + input[1]
answer[1] = input[0] - input[1]
answer[2] = input[0] * input[1]
answer[3] = Math.floor(input[0] / input[1])
answer[4] = input[0] % input[1]

console.log(answer.join('\n'))