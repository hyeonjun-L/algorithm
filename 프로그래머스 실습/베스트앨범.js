function solution(genres, plays) {
  let hashTable = {};
  let result = [];

  //1. 같은 장르끼리 묶음
  genres.forEach((genre, index) => {
    if (genre in hashTable) {
      hashTable[genre].playNum += plays[index];
      let maxSongArray = Object.values(hashTable[genre].maxSong);
      let keyArray = Object.keys(hashTable[genre].maxSong);

      if (maxSongArray.length < 2) {
        // 노래 1개 일 경우
        hashTable[genre].maxSong = {
          ...hashTable[genre].maxSong,
          [index]: plays[index],
        };
      } else if (Math.min(...maxSongArray) < plays[index]) {
        // 노래 2개 일경우 최솟 값 노래와 최댓 값 노래와 변경
        let minKey = keyArray[maxSongArray.indexOf(Math.min(...maxSongArray))];
        delete hashTable[genre].maxSong[minKey];
        hashTable[genre].maxSong = {
          ...hashTable[genre].maxSong,
          [index]: plays[index],
        };
      }
    } else {
      // 노래 없을 경우
      hashTable[genre] = {
        maxSong: { [index]: plays[index] },
        playNum: plays[index],
      };
    }
  });

  //   console.log(hashTable);

  //   {
  //     classic: { maxSong: { '0': 500, '3': 800 }, playNum: 1450 },
  //     pop: { maxSong: { '1': 600, '4': 2500 }, playNum: 3100 }
  //   }

  const sortedPlayNum = Object.entries(hashTable).sort(
    //playNum 순으로 정렬
    ([, a], [, b]) => b.playNum - a.playNum
  );

  //   console.log(sortedPlayNum);

  // [
  //   [ 'pop', { maxSong: { '0': 500, '3': 800 }, playNum: 3100 } ],
  //   [ 'classic', { maxSong: { '0': 500, '3': 800 }, playNum: 1450 } ]
  // ]

  for ([, genre] of sortedPlayNum) {
    // 노래 크기대로 정렬 후 순서대로 result push
    const sortedGenre = Object.entries(genre.maxSong).sort(
      ([, a], [, b]) => b - a
    );
    for ([Num] of sortedGenre) {
      result.push(Number(Num));
    }
  }

  return result;
}

function findKey(object, value, size) {}

console.log(
  solution(
    ["classic", "pop", "classic", "classic", "pop"],
    [500, 600, 150, 800, 2500]
  )
);
