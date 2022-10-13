const fs = require("fs")
const input = fs.readFileSync("/dev/stdin").toString().split('\n').map(Number);
let i = 0
let answer = [] //console.log의 시간 단축
let NOoverlap = []

for(let j = 1; NOoverlap.length <= 1000000; j++)
{
    if(overlap(j)) NOoverlap[NOoverlap.length] = j
}


while(i < input.length -1){  // 여러개의 테스트 케이스
    answer[i] = (solution(input[i]))
    i++
}
console.log(answer.join("\n"))


function solution(N) {
    if(N === 0) return
    else return NOoverlap[N - 1]
}

function overlap(X) {
    let arr = new Array(7)
    let i = 0
    while(X){
        for(let j = 0; j < i; j++){
            if(arr[j] === X%10) 
            return false
        }
        arr[i] = X%10
        i++
        X = Math.floor(X/10)
    }
    return true
}
