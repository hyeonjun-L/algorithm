function solution(numbers) {
  const visitedValue = new Map();
  const visited = Array.from({ length: numbers.length }, () => false);
  numbers = numbers.split("");

  function isPrime(n) {
    if (n <= 1) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) return false;
    }
    return true;
  }

  function dfs(number, visited) {
    console.log(visited);
    if (
      number !== "" &&
      isPrime(Number(number)) &&
      !visitedValue.has(Number(number))
    ) {
      visitedValue.set(Number(number), 1);
    }

    for (let i = 0; i < numbers.length; i++) {
      if (visited[i]) continue;
      visited[i] = true;
      dfs(number + numbers[i], visited);
      visited[i] = false;
    }
  }

  dfs("", visited);

  return visitedValue.size;
}

console.log(solution("110"));
