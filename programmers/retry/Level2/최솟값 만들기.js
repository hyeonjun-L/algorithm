console.log(solution([1, 4, 2], [5, 4, 4]));
console.log(solution([1, 2], [3, 4]));

function solution(a, b) {
  const AList = a.sort((a, b) => a - b);
  const BList = b.sort((a, b) => b - a);

  return AList.reduce((acc, value, index) => (acc += value * BList[index]), 0);
}
