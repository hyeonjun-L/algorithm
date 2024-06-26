console.log(
  solution(
    ["apple", "banana", "cherry", "orange", "pear", "strawberry"],
    [3, 2, 1, 1, 1, 1],
    [
      "apple",
      "banana",
      "cherry",
      "orange",
      "pear",
      "strawberry",
      "orange",
      "pear",
      "apple",
      "banana",
      "cherry",
      "strawberry",
      "cherry",
      "strawberry",
      "apple",
      "banana",
      "pear",
      "orange",
      "strawberry",
      "apple",
    ]
  )
);

function solution(want, number, discount) {
  const wantObj = want.reduce((acc, curr, index) => {
    acc[curr] = number[index];
    return acc;
  }, {});
  let answer = 0;

  for (var i = 0; i < discount.length; i++) {
    let copyObj = { ...wantObj };
    for (let stuff of discount.slice(i, i + 10)) {
      if (copyObj[stuff]) {
        copyObj[stuff] -= 1;
      }
    }
    if (
      Object.values(copyObj).reduce((acc, value) => {
        return (acc += value);
      }, 0) === 0
    ) {
      answer++;
    }
  }
  return answer;
}
