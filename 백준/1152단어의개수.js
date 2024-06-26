const input = require('fs').readFileSync(__dirname + "/input.txt").toString().trim().split(' ') //'/dev/stdin'
input[0] === '' ? console.log(0) : console.log(input.length)