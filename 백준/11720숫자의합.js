let fs = require("fs");
let input = fs.readFileSync(__dirname + "/input.txt").toString().split('\n') //'/dev/stdin'

console.log(input[1].toString().split('').map(Number).reduce((a,b) => a + b))