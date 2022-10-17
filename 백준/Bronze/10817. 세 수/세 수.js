const fs = require("fs");
let input = fs.readFileSync('/dev/stdin').toString().split(' ').map(Number).sort((a,b) => a-b)
console.log(input[1])