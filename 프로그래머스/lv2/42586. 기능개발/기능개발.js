function solution(progresses, speeds) {
  const completionDate = progresses.map((progress, index) => {
    return Math.ceil((100 - progress) / speeds[index]);
  });
  const answer = [];

  let maxCompletionDate = -Infinity;
  for (let date of completionDate) {
    if (maxCompletionDate >= date) {
      answer[answer.length - 1] += 1;
    } else {
      maxCompletionDate = date;
      answer.push(1);
    }
  }
  return answer;
}
