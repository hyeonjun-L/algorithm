//10억명이면 선형(O(n))으로 못푼다.
// 로그시간(O( log n ))으로 해야한다. 로그시간하면 떠오르는 것 (이진탐색)
// Time 10만명 선형(O(n))으로 충분히 가능하다. (이진탐색은 정렬이 필요하기 때문에)

// 특정 값을 찾는게 아닌 최소 몇분에 모든 심사가 끝나는지를 찾는다 (조건에 맞는 값을 찾는것)
//  ㄴ 결정문제 = 이진탐색 = 파라메트릭 서치 (Parametric Search)

// 전략ㄱ
// 최소 1분에서 10억분 * n 사이에 답이 있다는것은 확실하다.
// 심사관들이 몇 명을 처리하는가?
// 처리 가능한 입국자가 n 보다 작다면 분을 올려야 하고, 입국자가 n보다 크다면 분을 낮춰야한다.
// 면접관이 시간대비 몇 명을 처리할 수 있는가?
// 시간 / 심사시간 = 심사관 당 처리 가능한 입국자 수

function solution(n, times) {
  const sortedTimes = times.sort((a, b) => a - b); //O(n log n)
  let left = 1;
  let right = sortedTimes[sortedTimes.length - 1] * n;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    const processedEntrants = sortedTimes.reduce(
      // 심사관당 처리 가능한 입국자 수
      (acc, time) => acc + Math.floor(mid / time),
      0
    );

    if (processedEntrants < n) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return left;
}

console.log(solution(6, [7, 10]));
