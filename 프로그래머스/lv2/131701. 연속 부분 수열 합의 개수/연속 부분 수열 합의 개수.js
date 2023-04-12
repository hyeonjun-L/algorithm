function solution(elements) {
  const length = elements.length;
  const answer = [...elements];
  elements = [...elements, ...elements];

  answer.push(
    answer.reduce((acc, value) => {
      return (acc += value);
    }, 0)
  );

  for (let i = 1; i < length - 1; i++) {
    for (let j = 1; j <= length; j++) {
      answer.push(
        elements.slice(j - 1, j + i).reduce((acc, value) => {
          return (acc += value);
        }, 0)
      );
    }
  }
  return [...new Set(answer)].length;
}