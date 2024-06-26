const input = require('fs').readFileSync(__dirname + "/input.txt").toString().trim().split('\n')
input.shift()
let stack = []
let answer = []
const command = input.toString().replace(/\r/g, "").split(' ').toString().split(',')

for(let i = 0; i < command.length; i++)
{
    switch(command[i])
    {
        case 'push' : 
            stack[stack.length] = Number(command[i+1])
            i++
            break
        case 'pop' :
            if(stack.length === 0) 
                answer[answer.length] = -1
            else{ 
                answer[answer.length] = stack[stack.length -1 ]
                stack.pop()
                }
            break
        case 'size' :
            answer[answer.length] = stack.length
            break
        case 'empty' :
            stack.length === 0 ? answer[answer.length] = 1 : answer[answer.length] = 0
            break
        case 'top' :
            stack.length === 0 ? answer[answer.length] = -1 : answer[answer.length] = stack[stack.length -1 ]
            break
    }
}
console.log(answer.join('\n'))