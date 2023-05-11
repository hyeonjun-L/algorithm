function solution(step, distance) {
  let count = 0;

  for (let x = 0; x <= distance; x += step) {
    const yMax = Math.sqrt(distance ** 2 - x ** 2);
    const yCount = Math.floor(yMax / step) + 1;
    count += yCount;
  }

  return count;
}