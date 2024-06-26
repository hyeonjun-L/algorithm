console.log(
  solution(80, [
    [80, 20],
    [50, 40],
    [30, 10],
  ])
);

function solution(k, dungeons) {
  let answer = 0;

  function verification(dungeons) {
    let fatigue = k;
    let count = 0;
    for (let dungeon of dungeons) {
      let [min, waste] = dungeon;
      if (fatigue < min) break;
      else {
        fatigue -= waste;
        count++;
      }
    }
    answer = Math.max(count, answer);
  }

  function bfs(i, dungeons) {
    if (i === dungeons.length) {
      return verification([...dungeons]);
    }
    for (let j = i; j < dungeons.length; j++) {
      //순열
      [dungeons[i], dungeons[j]] = [dungeons[j], dungeons[i]];
      bfs(i + 1, dungeons);
      [dungeons[i], dungeons[j]] = [dungeons[j], dungeons[i]];
    }
  }
  bfs(0, dungeons);
  return answer;
}

// function solution(k, dungeons) {
//   const len = dungeons.length;
//   //모든 경우의 수를 확인하기 위한 배열
//   const visited = new Array(len).fill(false);
//   //클리어 횟수를 확인
//   let clearCnt = 0;

//   //모든 경우의 수를 확인하기 위한 재귀
//   const dfs = (k, curCnt) => {
//     //현재 클리어 횟수와 전의 클리어 횟수를 비교
//     clearCnt = Math.max(curCnt, clearCnt);

//     for (let i = 0; i < len; i++) {
//       const [minK, useK] = dungeons[i];

//       //현재 피로도보다 크고 확인한적이 없다면
//       if (k >= minK && !visited[i]) {
//         //확인, 피로도 감소 및 카운트 증가 후 재귀
//         visited[i] = true;
//         dfs(k - useK, curCnt + 1);
//         visited[i] = false;
//       }
//     }

//     console.log(visited);
//   };
//   dfs(k, 0);

//   return clearCnt;
// }
