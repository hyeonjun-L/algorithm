const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
input.shift()
console.log(input.map(Number).sort((a,b)=> a-b).join('\n'))