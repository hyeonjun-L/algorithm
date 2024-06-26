console.log(solution(2, 4));

function solution(k, d) {
  let answer = 0;

  for (let i = 0; i <= d; i += k) {
    let [xDot, yDot] = [i, 0];
    while (xDot < d && yDot < d) {
      yDot += k;
      if (Math.sqrt(xDot ** 2 + yDot ** 2) <= d) {
        console.log(xDot, yDot);
        answer++;
      }
    }
  }

  let zero = Math.floor(d / k) + 1;
  return (answer += zero);
}

// (0, 0), (0, 2), (0, 4)
// (2, 0), (2, 2)
// (4, 0)

// (0, 0), (1, 0), (2, 0), (3, 0), (4, 0), (5, 0)
// (0, 1), (0, 2), (0, 3), (0, 4), (0, 5)
// (1, 1), (1, 2), (1, 3), (1, 4),
// (2, 1), (2, 2), (2, 3), (2, 4),
// (3, 1), (3, 2), (3, 3), (3, 4)
// (4, 1), (4, 2), (4, 3),

// (0, 0) // (0, 3)
// (3, 0)

// x2 - x1 + y2 - y1

// function solution(k, d) {
//     let count = 0;
//     let yDot = 0;
//     let answer = 0;
//     let odd = d % 2 === 0 ? 0 : 1;

//     for (let i = d; i > 0; i -= k) {
//       let xDot = i;
//       while (yDot <= d) {
//         if (Math.sqrt(xDot ** 2 + yDot ** 2) <= d) {
//           console.log(xDot, yDot);
//           count++;
//         } else {
//           break;
//         }
//         yDot += k;
//       }
//       yDot = count;
//       answer += count;
//     }

//     let zero = Math.floor(d / k) + 1;
//     return (answer += zero);
//   }

// function solution(k, d) {
//     const yDotArr = [0];
//     let answer = 0;
//     let skip = 0;
//     const odd = d % k === 0 ? 0 : 1;

//     for (let i = d - odd; i >= 0; i -= k) {
//       let xDot = i;
//       let yDot = yDotArr[yDotArr.length - 1];
//       let count = 0;

//       while (yDot <= d) {
//         if (Math.sqrt(xDot ** 2 + yDot ** 2) <= d) {
//           count++;
//           answer++;
//           yDotArr.push(yDot);
//         }
//         yDot += k;
//       }
//       skip += count - 1;
//       answer += skip;
//     }

//     return answer - skip;
//   }
