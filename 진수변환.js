// let binaryNumber = [
//   [2, 3, 1, 1],
//   [1, 2, 3, 1],
//   [1, 1, 2, 3],
//   [3, 1, 1, 2],
// ].map((arr) => {
//   return arr.map((arr2) => {
//     return arr2.toString(2);
//   });
// });

// let hexArr = ["87", "6E", "46", "A6"].map((hex) => {
//   return parseInt(hex, 16).toString(2);
// });

// console.log(hexArr);
// console.log(binaryNumber);

// let answer = binaryNumber.map((binary) => {
//   let answer = "0";
//   const XOR = [];
//   binary.forEach((value, index) => {
//     XOR.push((parseInt(value, 2) ^ parseInt(hexArr[index], 2)).toString(2));
//   });
//   return XOR.reduce((acc, value) => {
//     return (acc = (parseInt(acc, 2) + parseInt(value, 2)).toString(2));
//   }, "0").slice(-8);
// });

// console.log(answer);
// +;
// (parseInt(bin1, 2) + parseInt(bin2, 2)).toString(2);

// for (let hex of HexArr) {

// }

//2는 shift 3은(11)을 그대로 곱한다. 1은 그대로

// 구한 값 8이 넘게 된다면 => x 앞에 1 나오게 된거

// 다 라인 마다 1일 홀수면 1 짝수면 0을 하게되면 된다.
// 1/0001/1011 고정수 와 결과 값을 XOR 진행하면 된다.

let binaryNumber = [
  [2, 3, 1, 1],
  [1, 2, 3, 1],
  [1, 1, 2, 3],
  [3, 1, 1, 2],
];

let hexArr = ["87", "6E", "46", "A6"].map((hex) => {
  return parseInt(hex, 16).toString(2);
});

console.log(hexArr);

let answer = binaryNumber.map((binary) => {
  const stack = [];
  const mod = {}
  binary.forEach((value, index) => {
    if (value === 2) {
      stack.push(hexArr[index] * 10);
    } else if (value === 3) {
      stack.push(
        (parseInt(hexArr[index] * 10, 2) ^ parseInt(hexArr[index], 2)).toString(
          2
        )
      );
    } else {
      stack.push(hexArr[index]);
    }

    stack.forEach((value,index) => {
      for(let num in value){
        mod[num]
      }
    })
  });
});
