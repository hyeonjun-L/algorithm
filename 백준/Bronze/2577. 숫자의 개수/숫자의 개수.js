const [A, B, C] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number)
const pro = String(A * B * C).split('').map(Number)
let answer = []

for(let i =0; i < 10; i++)
{
    answer[i] = pro.filter(val => val === i).length
}

console.log(answer.join('\n'))