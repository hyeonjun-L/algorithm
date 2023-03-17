function solution(m, n, startX, startY, balls) {
  const answer = [];
  for (let ball of balls) {
    const distance = [];
    if (ball[1] !== startY || ball[0] <= startX) {
      distance.push(
        ((m - ball[0]) * 2 + ball[0] - startX) ** 2 + (ball[1] - startY) ** 2
      );
    }
    if (ball[1] !== startY || ball[0] >= startX) {
      distance.push((-ball[0] - startX) ** 2 + (ball[1] - startY) ** 2);
    }
    if (ball[0] !== startX || ball[1] <= startY) {
      distance.push(
        ((n - ball[1]) * 2 + ball[1] - startY) ** 2 + (ball[0] - startX) ** 2
      );
    }
    if (ball[0] !== startX || ball[1] >= startY) {
      distance.push((-ball[1] - startY) ** 2 + (ball[0] - startX) ** 2);
    }
    answer.push(Math.min(...distance));
  }
  return answer;
}