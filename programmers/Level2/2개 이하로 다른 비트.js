console.log(solution([5]));

function solution(numbers) {
  return numbers.map((number) => {
    if (number % 2 === 0) {
      return number + 1;
    } else {
      const location = number.toString(2).lastIndexOf("0");
      const value =
        10 ** (location !== -1 ? location : number.toString(2).length);
      return parseInt(
        Number(number.toString(2)) +
          value -
          (parseInt(value, 2) / 2).toString(2),
        2
      );
    }
  });
}

function solution(numbers) {
  return numbers.map((x) => {
    if (x % 2 === 0) return x + 1;
    let bit = "0" + x.toString(2);
    let idx = bit.lastIndexOf("0");
    return parseInt(`${bit.slice(0, idx)}10${bit.slice(idx + 2)}`, 2);
  });
}

// function solution(numbers) {
//   const numbersObj = {};

//   for (let number of [...new Set(numbers)]) {
//     let i = number + 1;
//     console.log((number ^ i).toString(2).split(""));
//     while (true) {
//       let count = 0;
//       (number ^ i)
//         .toString(2)
//         .split("")
//         .forEach((value) => {
//           if (value === "1") count++;
//         });
//       if (count <= 2) {
//         numbersObj[number] = i;
//         break;
//       }
//       i++;
//     }
//   }

//   return numbers.map((number) => numbersObj[number]);
// }

////////////시간초과//////////////////////

// function solution(numbers) {
//   let answer = [];
//   let answerObj = {};

//   for (let number of numbers) {
//     if (answerObj[number]) {
//       answer.push(answerObj[number]);
//     } else {
//       const bit = number.toString(2);
//       let i = number + 1;
//       let different = true;

//       while (different) {
//         different = bitComparison(bit, i);
//         i++;
//       }
//       --i;
//       answerObj[number] = i;
//       answer.push(i);
//     }
//   }
//   return answer;
// }

// function bitComparison(bits, i) {
//   const anotherBit = i.toString(2).split("").reverse();
//   bits = ("0".repeat(anotherBit.length - bits.length) + bits)
//     .split("")
//     .reverse();

//   let count = 0;

//   bits.forEach((bit, index) => {
//     if (bit !== anotherBit[index]) {
//       count++;
//     }
//     if (count > 2) {
//       return false;
//     }
//   });

//   return !(count <= 2);
// }
// console.log(bits);
// console.log(anotherBit);
