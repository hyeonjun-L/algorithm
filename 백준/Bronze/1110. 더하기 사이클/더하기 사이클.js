let fs = require("fs");
let input = Number(fs.readFileSync('/dev/stdin').toString())
let S = input
let N
let cycle = 0

while(true){
    cycle++
    N = Math.floor(S / 10) + S % 10
    S = (S % 10) * 10 + N % 10
    if(input === S) break
}

console.log(cycle)