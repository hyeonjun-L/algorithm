function solution(n, times) {
  const sortedTimes = times.sort((a, b) => a - b);
  let left = 1;
  let right = sortedTimes[sortedTimes.length - 1] * n;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    const processedEntrants = sortedTimes.reduce(
      (acc, time) => acc + Math.floor(mid / time),
      0
    );

    if (processedEntrants < n) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return left;
}