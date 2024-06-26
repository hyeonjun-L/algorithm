console.log(solution(10, 8000, 5));

function solution(x, y, n) {
  let count = 0;
  const countArr = [];

  function dfs(x, count) {
    if (x === y) {
      countArr.push(count);
      return count;
    }
    if (x > y) {
      return count;
    }

    dfs(x + n, count + 1);
    dfs(x * 2, count + 1);
    dfs(x * 3, count + 1);
  }

  dfs(x, count);
  const answer = Math.min(...countArr);
  return answer === Infinity ? -1 : answer;
}
