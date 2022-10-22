const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const Count = Number(input[0])
let score = input[1].split(' ').map(Number)
let Maxscore = Math.max(...score)

console.log(score.map(val => val/Maxscore*100).reduce((acc,val) => acc + val) /Count)