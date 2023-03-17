function solution(m, n, startX, startY, balls) {
  const answer = [];
  for (let ball of balls) {
    const distance = [];
    if (ball[1] !== startY || ball[0] <= startX) {
      console.log(ball, "1번 포함");
      distance.push(
        ((m - ball[0]) * 2 + ball[0] - startX) ** 2 + (ball[1] - startY) ** 2
      );
    }
    if (ball[1] !== startY || ball[0] >= startX) {
      console.log(ball, "2번 포함");
      distance.push((-ball[0] - startX) ** 2 + (ball[1] - startY) ** 2);
    }
    if (ball[0] !== startX || ball[1] <= startY) {
      console.log(ball, "3번 포함");
      distance.push(
        ((n - ball[1]) * 2 + ball[1] - startY) ** 2 + (ball[0] - startX) ** 2
      );
    }
    if (ball[0] !== startX || ball[1] >= startY) {
      console.log(ball, "4번 포함");
      distance.push((-ball[1] - startY) ** 2 + (ball[0] - startX) ** 2);
    }
    answer.push(Math.min(...distance));
  }
  return answer;
}