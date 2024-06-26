console.log(
  solution([
    [1, 2, 3, 5],
    [5, 6, 7, 8],
    [4, 3, 2, 1],
  ])
);

function solution(land) {
  const dp = [];
  for (let i = 0; i < land.length; i++) {
    dp[i] = [0, 0, 0, 0];
  }
  dp[0] = land[0];

  for (let i = 1; i < land.length; i++) {
    dp[i][0] = Math.max(dp[i - 1][1], dp[i - 1][2], dp[i - 1][3]) + land[i][0];
    dp[i][1] = Math.max(dp[i - 1][0], dp[i - 1][2], dp[i - 1][3]) + land[i][1];
    dp[i][2] = Math.max(dp[i - 1][0], dp[i - 1][1], dp[i - 1][3]) + land[i][2];
    dp[i][3] = Math.max(dp[i - 1][0], dp[i - 1][1], dp[i - 1][2]) + land[i][3];
  }
  console.log(dp);
  return Math.max(...dp[land.length - 1]);
}

// function solution(land) {
//   let answer = 0;
//   let beforeIndex = -1;
//   for (let i = 0; i < land.length; i++) {
//     land[i][beforeIndex] = 0;
//     let maxNum = Math.max(...land[i]);
//     answer += maxNum;
//     beforeIndex = land[i].indexOf(maxNum);
//   }
//   return answer;
// }
// 탐욕법으로 풀었으때는 안된다. 	[[1, 1, 3, 1], [2, 3, 2, 2], [1, 4, 1, 1]] 결과 9 나와야함
