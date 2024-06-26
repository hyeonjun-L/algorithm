// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split(/\s+/).slice(1);

const input = `4
1 3 5 7`
  .trim()
  .split(/\s+/)
  .slice(1);

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
  console.log(isPrime);

  let count = 0;
  for (let num of arr) {
    if (isPrime[num]) count++;
  }
  console.log(count);
}

// 배열에서 제일 큰값 구해서 1~ 제일큰값까지 전체 배열 만들어서 진행함 이게 된다;
