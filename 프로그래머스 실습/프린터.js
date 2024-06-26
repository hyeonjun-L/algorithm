function solution(priorities, location) {
  let result = 0;
  let index = 0;
  let shift = 0;
  priorities[location] = `${priorities[location]}`;

  while (typeof shift !== "string") {
    shift = priorities[index];
    if (priorities.slice(index).find((value) => value > shift) ?? false) {
      priorities.push(shift);
      shift = 0;
    } else {
      result++;
    }
    index++;
  }
  return result;
}

console.log(solution([1, 1, 9, 1, 1, 1], 0));
