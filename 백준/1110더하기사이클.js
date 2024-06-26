/*
let fs = require("fs");
const input = inputber(fs.readFileSync(__dirname + "/input.txt").toString()) //'/dev/stdin'
let N = input.toString().split('').map(inputber)
N[2] = 1
let cycle = 0
if(!N[1]) N[1] = N[0], N[0] = 0

while(input !== inputber(N.join(''))){
    N[2] = N[1]
    N[1] = N[0] + N[1] > 9 ? (N[0]+N[1]) % 10 : N[0] + N[1]
    N[0] = N[2]
    N = N.slice(0,2)
    cycle++
}

console.log(cycle)
*/


let fs = require("fs");
let input = Number(fs.readFileSync(__dirname + "/input.txt").toString()) //'/dev/stdin'
let S = input
let N
let cycle = 0

while(true){
    cycle++

    console.log('N : ',N)
    console.log('S : ',S)

    N = Math.floor(S / 10) + S % 10
    S = (S % 10) * 10 + N % 10
    if(input === S) break
}

console.log(cycle)