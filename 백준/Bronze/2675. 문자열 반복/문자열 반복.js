const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

for (let i = 1; i <= input[0]; i++) {
const [num2, str] = input[i].split(' ');
const answer = str.split('').map(char => char.repeat(num2)).join('');
console.log(answer);
}