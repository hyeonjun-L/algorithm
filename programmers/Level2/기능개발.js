console.log(solution([93, 30, 55], [1, 30, 5]));

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
