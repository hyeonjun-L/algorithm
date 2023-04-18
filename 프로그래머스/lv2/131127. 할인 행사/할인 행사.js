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
