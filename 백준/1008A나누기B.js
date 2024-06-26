let fs = require("fs");
let input = fs.readFileSync(__dirname + "/input.txt").toString().split(' ').map(Number)

console.log(input[0] / input[1])