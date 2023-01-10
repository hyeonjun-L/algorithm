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