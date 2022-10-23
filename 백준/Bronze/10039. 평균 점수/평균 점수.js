const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number)
let sum = input.reduce((acc,val) => val < 40 ? acc += 40 : acc += val,0)
console.log(sum/input.length)