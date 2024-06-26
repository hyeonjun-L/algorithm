/*

const fs = require("fs")
let input = fs.readFileSync("/dev/stdin").toString().split('\n').map((item) => +item);
let i = 0
while(i < input.length -1){  // 여러개의 테스트 케이스
    solution(input[i])
    i++
}

function solution(N) {
    if(N === 0) return
    let Nlocation = 0
    let count = 0
    while(N !== count){
        if(new Set((Nlocation+1).toString().split('')).size == (Nlocation+1).toString().split('').length)
        count++, Nlocation++
        else Nlocation ++
    }
    console.log(Nlocation)
}
*/

/*
const fs = require("fs")
const input = fs.readFileSync(__dirname+"/input.txt").toString().split('\n').map((item) => +item);
let i = 0
let answer = [] //console.log의 시간 단축
while(i < input.length -1){  // 여러개의 테스트 케이스
    answer[i] = (solution(input[i]))
    i++
}

console.log(answer.join("\n"))

function solution(N) {
    if(N === 0) return
    let Nlocation = 0
    let count = 0
    let NumSplit
    while(N !== count){
        NumSplit = (Nlocation+1).toString().split('')
        if(new Set(NumSplit).size === NumSplit.length)
        count++, Nlocation++
        else Nlocation ++
    }
    return Nlocation

     let NumSplit = j.toString().split('')
    if(new Set(NumSplit).size === NumSplit.length)
}
*/

/*
const fs = require("fs")
const input = fs.readFileSync(__dirname+"/input.txt").toString().split('\n').map(Number);
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
*/

function solution(data) {
    /* ref: https://www.acmicpc.net/source/1084914 */
    let output = "";

    const total = [1, 9];
    for (let i = 2; i <= 10; i++) total[i] = total[i - 1] * (11 - i);

    console.log(total)

    let di = 0;
    while (data[di]) {
        let n = data[di++] - 1;
        console.log(n)
        let len = 1;
        while (n >= total[len]) n -= total[len++];
        console.log(n)

        const v = new Array(10).fill(0);
        for (let i = 0; i < len; i++) {
            let [counts, digit] = [1, i ? 0 : 1];
            console.log(counts)
            console.log(digit)
            for (let j = i + 1; j < len; j++) counts *= 10 - j;
            while (v[digit]) digit++;
            while (n >= counts) {
                n -= counts;
                while (v[++digit]);
                console.log(v)
            }
            v[digit] = 1;
            output += digit;
        }
        output += "\n";
    }

    return output;
}

const input = require("fs").readFileSync(__dirname+"/input.txt").toString().trim().split(/\n+/).map((x) => +x);
setInterval(() => {
    process.stdout.write(solution(input));
    process.exit(0);
});

