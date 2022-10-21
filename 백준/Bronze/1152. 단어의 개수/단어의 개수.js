const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ')
input[0] === '' ? console.log(0) : console.log(input.length)