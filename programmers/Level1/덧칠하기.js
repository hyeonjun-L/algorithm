console.log(solution(8, 4, [6])); // 1
console.log(solution(8, 3, [1, 2, 3, 6])); //2
console.log(solution(8, 2, [2, 4, 5, 6, 7, 9, 10])); // 4    8

console.log(solution(8, 4, [2, 3, 6])); //2       4
console.log(solution(5, 4, [1, 3])); // 1
console.log(solution(4, 1, [1, 2, 3, 4])); // 4     3

function solution(n, m, sections) {
  let answer = 1;
  let beforeValue = sections[0];
  for (let section of sections) {
    if (section > beforeValue + m - 1) {
      beforeValue = section;
      answer++;
    }
  }
  return answer;
}
