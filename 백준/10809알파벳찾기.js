const input = require('fs').readFileSync(__dirname + "/input.txt").toString().trim()
let answer = []

for(let i = 97; i<123; i++)
{
    answer[i-97] = input.indexOf(String.fromCharCode(i))
}

console.log(answer.join(' '))
