const fs = require("fs"); 
const input = fs.readFileSync("/dev/stdin").toString().trim().split(/\s+/);

const col = input.shift();
const costs = [];
for (let i = 0; i < col; i++) {
  costs.push(input.splice(0, 3).map(Number)); 
}

const dp = [];
for (let i = 0; i < col; i++) {
  dp[i] = [0, 0, 0];
}
dp[0] = costs[0];

for (let i = 1; i < col; i++) {
  dp[i][0] = Math.min(dp[i - 1][1], dp[i - 1][2]) + costs[i][0];
  dp[i][1] = Math.min(dp[i - 1][0], dp[i - 1][2]) + costs[i][1];
  dp[i][2] = Math.min(dp[i - 1][0], dp[i - 1][1]) + costs[i][2];
}

console.log(Math.min(...dp[col - 1])); 