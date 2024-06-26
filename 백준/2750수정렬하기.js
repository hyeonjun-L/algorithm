const input = require('fs').readFileSync(__dirname + "/input.txt").toString().trim().split('\n') //.map(Number).sort((a,b)=> a-b)
input.shift()
console.log(input.map(Number).sort((a,b)=> a-b).join('\n'))