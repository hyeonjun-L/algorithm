console.log(solution("110010101001"));
console.log(solution("01110"));
console.log(solution("1111111"));

function solution(s) {
  const answer = [0, 0];

  while (s !== "1") {
    const zeroCount = s.split("0").length - 1;
    answer[1] += zeroCount;
    s = (s.length - zeroCount).toString(2);
    answer[0]++;
  }

  return answer;
}
