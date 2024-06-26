const [A, B, C] = require('fs').readFileSync(__dirname + "/input.txt").toString().trim().split('\n').map(Number)
const pro = String(A * B * C).split('').map(Number)
let answer = []

for(let i =0; i < 10; i++)
{
    answer[i] = pro.filter(val => val === i).length
}

console.log(answer.join('\n'))

/*
const input = require('fs').readFileSync(__dirname + "/input.txt").toString().split('\n').map(Number)
const pro = input.reduce((acc, val) => acc * val).toString().split('').map(Number)
let answer = []

for(let i =0; i < 10; i++)
{
    answer[i] = pro.filter(val => val === i).length
}
console.log(answer.join('\n'))
*/