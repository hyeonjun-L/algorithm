console.log(solution([7, 9, 1, 1, 4]));

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

// console.log(elements.slice(i - 1, i + 1));
// console.log(elements.slice(i - 1, i + 2));
// console.log(elements.slice(i - 1, i + 3));
// console.log(elements.slice(i - 1, i + 4));

//   console.log(elements.slice(i - 1, i + 5));

function solution(elements) {
  const circular = elements.concat(elements);
  console.log(circular);
  const set = new Set();
  for (let i = 0; i < elements.length; i++) {
    let sum = 0;
    for (let j = 0; j < elements.length; j++) {
      sum += circular[i + j];
      console.log(sum);
      set.add(sum);
    }
    console.log("끝");
  }
  return set.size;
}
