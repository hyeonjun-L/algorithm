const num = Number(require('fs').readFileSync('dev/stdin').toString());
let result = Array(num);

result[0] = 1;
result[1] = 1;
for (let i = 2; i< num; i++) {
    result[i] = BigInt(result[i-1]) + BigInt(result[i-2]);
}

console.log(String(result[num - 1]));
