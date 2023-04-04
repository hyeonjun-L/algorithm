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