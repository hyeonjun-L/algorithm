console.log(solution(4, 7, 14));

function solution(n, left, right) {
  let answer = [];
  for (let i = left; i <= right; i++) {
    const row = parseInt(i / n + 1);
    const col = (i % n) + 1;
    answer.push(Math.max(row, col));
  }
  return answer;
}

// signal: aborted (core dumped) 메모리 에러 효율성 떨어진다.
// const arr = [];
// for (let i = 1; i <= n; i++) {
//   arr.push(i);
// }

// return arr
//   .map((value) => {
//     let arr2 = arr.slice();
//     for (let i = 0; i < value; i++) {
//       arr2[i] = value;
//     }
//     return arr2;
//   })
//   .reduce((acc, cur) => {
//     return acc.concat(cur);
//   })
//   .slice(left, right + 1);
