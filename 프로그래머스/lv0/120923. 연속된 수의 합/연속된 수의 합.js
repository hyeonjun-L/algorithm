function solution(num, total) {
  let start = 0;
  let currentSum = (num * (num - 1)) / 2;

  while (currentSum !== total) {
    if (currentSum < total) {
      start++;
    }
    else {
      start--;
    }
    currentSum = (num * (2 * start + num - 1)) / 2;
  }
  return new Array(num).fill(0).map((_, i) => start + i);
}