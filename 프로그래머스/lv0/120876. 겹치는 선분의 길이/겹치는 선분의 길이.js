function solution(lines) {
  const lineMap = new Array(200).fill(0);
  let answer = 0;

  for (let i = 0; i < 3; i++) {
    const [left, right] = lines[i];
    for (let j = left; j < right; j++) {
      lineMap[j + 100]++;
    }
  }

  for (let i = 0; i < lineMap.length; i++) {
    if (lineMap[i] > 1) answer++;
  }

  return answer;
}