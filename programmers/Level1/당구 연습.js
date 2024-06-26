solution(
  10,
  10,
  3,
  7,
  [
    [7, 7],
    [2, 7],
    [7, 3],
  ],
  [52, 37, 116]
);

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
// 대칭 이동을 이용한 풀이 단 수평일 경우 벽을 먼저 맞출수 있다.
