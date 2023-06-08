function solution(numbers) {
  if (Number(numbers.join("")) === 0) {
    return "0";
  }

  return numbers
    .sort((a, b) => {
      const aString = `${a}`;
      const bString = `${b}`;
      return Number(bString + aString) - Number(aString + bString);
    })
    .join("");
}