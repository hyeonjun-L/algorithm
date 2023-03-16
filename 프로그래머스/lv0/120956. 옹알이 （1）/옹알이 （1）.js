function solution(babbling) {
  const regex = /^(aya|ye|woo|ma)+$/;
  const answer = babbling.reduce((acc, word) => {
    if (regex.test(word)) {
      return acc + 1;
    }
    return acc;
  }, 0);
  return answer;
}