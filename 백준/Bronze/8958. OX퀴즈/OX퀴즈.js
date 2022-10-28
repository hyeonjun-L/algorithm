let input = require('fs').readFileSync('/dev/stdin').toString().trim().replace(/\r/g, "").split('\n')
input.shift()
let answer = []

for(let i = 0; i < input.length; i++)
{
    let continuous = 0
    let score = 0
    input[i] = input[i].toString().split('')
    for(let j = 0; j <= input[i].length; j++)
    {
        if(input[i][j] === 'O') continuous++
        else{
            for(let k = 1; k <= continuous; k++) score += k
            continuous = 0
        }
    }
    answer[i] = score
}

console.log(answer.join('\n'))