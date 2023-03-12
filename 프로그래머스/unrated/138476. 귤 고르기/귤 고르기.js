function solution(k, tangerine) {
  let answer = 0;
  const sizeCount = {};
  tangerine.forEach((size) => {
    if (sizeCount[size]) {
      sizeCount[size] = sizeCount[size] + 1;
    } else {
      sizeCount[size] = 1;
    }
  });
  const keys = Object.values(sizeCount).sort((a, b) => b - a);

  for (const t of keys) {
    answer++;
    if (k > t) k -= t;
    else break;
  }
  return answer;
}