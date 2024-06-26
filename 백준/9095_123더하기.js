const input = require('fs').readFileSync(__dirname + "/input.txt").toString().trim().split('\n').map(Number)
input.shift()
let answer = [1, 2, 4, 7, 13, 24, 44, 81, 149, 274]
let result = []
for(let i = 0; i < input.length; i++){
    result[result.length] = answer[input[i] - 1]
}

console.log(result.join('\n'))

/*
let answer = [1, 2, 4, 0, 0, 0, 0, 0, 0, 0]

for(let i = 3; i < 10; i++){
    let j = 3
    for(j = i - j; j < i; j++){
        answer[i] += answer[j]
    }
}
*/

/*
const [T, ...input] = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');
const memo = {1: 1, 2: 2, 3: 4}

let result = '';
input.map(n => {
	const num = parseInt(n);
	for(let i = 4; i <= num; i++) {
		memo[i] = memo[i - 1] + memo[i - 2] + memo[i - 3];
	}
	result += memo[num] + '\n';
})

console.log(result);
*/