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
      [dungeons[i], dungeons[j]] = [dungeons[j], dungeons[i]];
      bfs(i + 1, dungeons);
      [dungeons[i], dungeons[j]] = [dungeons[j], dungeons[i]];
    }
  }
  bfs(0, dungeons);
  return answer;
}