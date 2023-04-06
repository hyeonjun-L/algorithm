function solution(n, left, right) {
  let answer = [];
  for (let i = left; i <= right; i++) {
    const row = parseInt(i / n + 1);
    const col = (i % n) + 1;
    answer.push(Math.max(row, col));
  }
  return answer;
}