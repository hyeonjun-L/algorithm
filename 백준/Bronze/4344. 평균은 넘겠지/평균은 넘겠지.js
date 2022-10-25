const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
input.shift()
let Average = []
let answer = []

for(let i = 0; i < input.length; i++){
    input[i] = input[i].toString().split(' ').map(Number)
    input[i].shift()
    Average[i] = input[i].reduce((acc,val) => acc + val , 0) / input[i].length
    answer[i] = (input[i].filter(score => score > Average[i]).length / input[i].length * 100).toFixed(3) +'%'
}

console.log(answer.join('\n'))