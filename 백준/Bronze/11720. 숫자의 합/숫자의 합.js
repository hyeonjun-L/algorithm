let fs = require("fs");
let input = fs.readFileSync('/dev/stdin').toString().split('\n')

console.log(input[1].toString().split('').map(Number).reduce((a,b) => a + b))