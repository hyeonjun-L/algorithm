solution(
  "2020.01.01",
  ["Z 3", "D 5"],
  [
    "2019.01.01 D",
    "2019.11.15 Z",
    "2019.08.02 D",
    "2019.07.01 D",
    "2018.12.28 Z",
  ]
);

function solution(today, terms, privacies) {
  const answer = [];
  const todayDT = new Date(today);

  const termsOBJ = terms.reduce((acc, value) => {
    const term = value.split(" ");
    return { ...acc, [term[0]]: Number(term[1]) };
  }, {});

  privacies.forEach((value, index) => {
    const [date, type] = value.split(" ");
    const privaciesDT = new Date(date);
    privaciesDT.setMonth(privaciesDT.getMonth() + termsOBJ[type]);
    if (privaciesDT <= todayDT) answer.push(index + 1);
  });
  return answer;
}

//   Date.prototype.getInterval = function (otherDate) {
//     let interval = this.getTime() - otherDate.getTime();
//     return Math.floor(interval / (1000 * 60 * 60 * 24));
//   };
