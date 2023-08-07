function solution(numbers) {
  let count = 0;
  const visitedValue = new Map();

  function isPrime(n) {
    if (n <= 1) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) return false;
    }
    return true;
  }

  function bfs(number, visited) {
    if (number !== "" && isPrime(Number(number)) && !visitedValue.has(Number(number))) {
      count++;
      visitedValue.set(Number(number), 1);
    }

    for (let i = 0; i < numbers.length; i++) {
      if (visited[i]) continue;
      visited[i] = true;
      bfs(number + numbers[i], visited);
      visited[i] = false;
    }
  }

  numbers = numbers.split("");
  const visited = Array.from({ length: numbers.length }, () => false);
  bfs("", visited);

  return count;
}
