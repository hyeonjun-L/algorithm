const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(/\s+/).slice(1);

solution(input);

function solution(arr) {
  const max = Math.max(...arr);
  const isPrime = new Array(max + 1).fill(true);
  isPrime[0] = false;
  isPrime[1] = false;
  for (let i = 2; i <= Math.sqrt(max); i++) {
    if (isPrime[i]) {
      for (let j = i * i; j <= max; j += i) {
        isPrime[j] = false;
      }
    }
  }

  let count = 0;
  for (let num of arr) {
    if (isPrime[num]) count++;
  }
  console.log(count);
}