function solution(m, n, startX, startY, balls) {
  const answer = [];
  for (let ball of balls) {
    const distance = [];
    if (!(startY === ball[1] && startX < ball[0])) {
      distance.push(
        ((m - ball[0]) * 2 + ball[0] - startX) ** 2 + (ball[1] - startY) ** 2
      );
    }
    if (!(startY === ball[1] && startX > ball[0])) {
      distance.push((-ball[0] - startX) ** 2 + (ball[1] - startY) ** 2);
    }
    if (!(startX === ball[0] && startY < ball[1])) {
      distance.push(
        ((n - ball[1]) * 2 + ball[1] - startY) ** 2 + (ball[0] - startX) ** 2
      );
    }
    if (!(startX === ball[0] && startY > ball[1])) {
      distance.push((-ball[1] - startY) ** 2 + (ball[0] - startX) ** 2);
    }
    answer.push(Math.min(...distance));
  }
  return answer;
}
