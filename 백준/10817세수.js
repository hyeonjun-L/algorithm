const fs = require("fs");
let input = fs.readFileSync(__dirname + "/input.txt").toString().split(' ').map(Number).sort((a,b) => a-b) // '/dev/stdin'
console.log(input[1])