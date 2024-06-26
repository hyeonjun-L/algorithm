console.log(solution("1 2 3 4"));
console.log(solution("-1 -2 -3 -4"));
console.log(solution("-1 -1"));

function solution(s) {
  const sortList = s.split(" ").sort((a, b) => b - a);
  return `${sortList.at(-1)} ${sortList[0]}`;
} // O(n log n)

function solution(s) {
  const { min, max } = s.split(" ").reduce(
    (acc, value) => {
      const numValue = Number(value);
      if (acc.min === null || acc.max === null) {
        return { min: numValue, max: numValue };
      }
      if (acc.min > numValue) {
        acc.min = numValue;
      }
      if (acc.max < numValue) {
        acc.max = numValue;
      }

      return acc;
    },
    { min: null, max: null }
  );

  return `${min} ${max}`;
}
// O(n)

function solution(s) {
  const arr = s.split(" ");

  return Math.min(...arr) + " " + Math.max(...arr);
} // O(2n)
