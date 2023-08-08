function solution(routes) {
  routes.sort(([start1, end1], [start2, end2]) => end1 - end2);
  let answer = 1;

  let camera = routes[0][1];

  for (let i = 1; i < routes.length; i++) {
    const [nextStart, nextEnd] = routes[i];

    if (nextStart > camera) {
      answer++;
      camera = nextEnd;
    } else {
      camera = Math.min(camera, nextEnd);
    }
  }

  return answer;
}
