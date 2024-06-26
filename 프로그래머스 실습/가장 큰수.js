//1. 길이가 같다면, 두 수를 그대로 비교하여 더 큰 수를 앞으로 오도록 합니다.
//2. 길이가 다르다면 각 수를 더한 값 (문자열로)을 비교합니다.

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

console.log(solution([0, 0]));

// function solution(numbers) {
//     return numbers
//       .sort((a, b) => {
//         const aString = `${a}`;
//         const bString = `${b}`;

//         if (aString.length === bString.length) {
//           return bString.localeCompare(aString);
//         } else {
//           return (bString + aString).localeCompare(aString + bString);
//         }
//       })
//       .join("");
//   }
