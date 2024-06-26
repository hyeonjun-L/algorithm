console.log(solution(4));

function solution(n) {
  const dp = Array(n).fill(0);
  dp[0] = 1;
  dp[1] = 2;

  for (let i = 2; i < n; i++) {
    dp[i] = (dp[i - 1] + dp[i - 2]) % 1000000007;
  }
  return dp[n - 1];
}

//1, 2, 3, 5, 8 .... n - 1 + n - 2
