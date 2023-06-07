function solution(genres, plays) {
  let hashTable = {};
  let result = [];

  genres.forEach((genre, index) => {
    if (genre in hashTable) {
      hashTable[genre].playNum += plays[index];
      let maxSongArray = Object.values(hashTable[genre].maxSong);
      let keyArray = Object.keys(hashTable[genre].maxSong);

      if (maxSongArray.length < 2) {
        hashTable[genre].maxSong = {
          ...hashTable[genre].maxSong,
          [index]: plays[index],
        };
      } else if (Math.min(...maxSongArray) < plays[index]) {
        let minKey = keyArray[maxSongArray.indexOf(Math.min(...maxSongArray))];
        delete hashTable[genre].maxSong[minKey];
        hashTable[genre].maxSong = {
          ...hashTable[genre].maxSong,
          [index]: plays[index],
        };
      }
    } else {
      hashTable[genre] = {
        maxSong: { [index]: plays[index] },
        playNum: plays[index],
      };
    }
  });

  const sortedplayNum = Object.entries(hashTable).sort(
    ([, a], [, b]) => b.playNum - a.playNum
  );

  for ([, genre] of sortedplayNum) {
    const sortedGenre = Object.entries(genre.maxSong).sort(
      ([, a], [, b]) => b - a
    );
    for ([Num] of sortedGenre) {
      result.push(Number(Num));
    }
  }

  return result;
}