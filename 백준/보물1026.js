/*
const fs = require("fs")
const input = fs.readFileSync(__dirname+"/input.txt").toString().replace(/\r/g,'').split('\n') //"/dev/stdin"
let N = Number(input[0])
let A = input[1].toString().split(' ').map(Number).sort((a,b) => a - b)
let B = input[2].toString().split(' ').map(Number)
let answer = 0


for(let i = 0; i < N; i++){
    let maxValue = Math.max.apply(null, B)
    answer += maxValue * A[i]
    B.splice(B.indexOf(maxValue),1)
}

console.log(answer)
*/

const fs = require('fs');
let [num, ...inputs] = fs.readFileSync(__dirname+"/input.txt").toString().trim().split('\n');
let countArr = Array.from({length:num}, ()=>1);
let firstArr = inputs[0].split(' ').map((e)=>parseInt(e))
let secondArr = inputs[1].split(' ').map((e)=>parseInt(e))

console.log(firstArr)
console.log(secondArr)
console.log(countArr)

for(let i = 0; i < num; i++){
    for(let j = 0; j < num; j++){
        if(secondArr[i] < secondArr[j]){
            countArr[i]++
        }
    }
}

console.log(firstArr)
console.log(secondArr)

firstArr.sort((a,b)=>a-b)
let sum = 0;
for(let i = 0; i < num; i++){
    sum += firstArr[countArr[i] - 1] * secondArr[i];
}

console.log(sum)