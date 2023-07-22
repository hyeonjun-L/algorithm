function canTransform(word1, word2) {
  let diffCount = 0;
  for (let i = 0; i < word1.length; i++) {
    if (word1[i] !== word2[i]) {
      diffCount++;
      if (diffCount > 1) return false;
    }
  }
  return diffCount === 1;
}

function solution(begin, target, words) {
  if (!words.includes(target)) return 0;

  words = words.map((word) => ({ word, visited: false }));

  function bfs(begin, words) {
    const queue = [{ word: begin, steps: 0 }];

    while (queue.length > 0) {
      const { word, steps } = queue.shift();

      if (word === target) {
        return steps;
      }

      for (const nextWordObj of words) {
        const { word: nextWord, visited } = nextWordObj;
        if (!visited && canTransform(word, nextWord)) {
          nextWordObj.visited = true;
          queue.push({ word: nextWord, steps: steps + 1 });
        }
      }
    }

    return 0; // 변환할 수 없는 경우
  }

  return bfs(begin, words);
}