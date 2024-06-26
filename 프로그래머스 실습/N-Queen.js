function solution(n) {
  let count = 0;
  const chessboard = Array.from(Array(n), () => new Array(n).fill(false));

  placeQueens(0);

  function placeQueens(row) {
    if (row === n) {
      count++;
      return;
    }

    for (let col = 0; col < n; col++) {
      if (isSafe(row, col)) {
        chessboard[row][col] = true;
        placeQueens(row + 1); //같은 행 가지 치기 진행
        chessboard[row][col] = false;
      }
    }
  }

  function isSafe(row, col) {
    for (let i = 0; i < row; i++) {
      if (
        chessboard[i][col] ||
        row - i === Math.abs(col - chessboard[i].indexOf(true))
      ) {
        return false;
      }
    }
    return true;
  }

  return count;
}
//for문 자체를 줄인것 백트래킹(가지 치기 진행)

console.log(solution(4));

// 우선 모든 경우의 수를 찾는 것은 괜찮습니다. 그런데 어떻게 해야 가지치기를 잘했다고 소문이 날까요? 가지치기 할 수 있는 경우는 다음과 같습니다.

// 퀸을 둔 행은 가지치기 한다.

// 퀸을 둔 열은 가지치기 한다.

// 퀸을 둔 대각선 왼쪽, 오른쪽은 가지치기 한다.

// 가지치기 조건을 찾은 것은 좋지만 가지치기를 위해 행과 열, 대각선을 루프를 통해 검사하게 되면 성능을 크게 낭비하게 됩니다. 그래서 최대한 적은 비용으로 가지치기를 하기 위해 1차원 배열을 사용해봅시다. 1차원 배열은 다음과 같이 데이터가 들어갑니다.

// 배열의 index는 행의 위치, 해당 index의 value는 열의 위치

// 예를 들어, queen[2] = 1은 체스판 위에서 두 번째 줄, 첫 번째 칸에 해당한다. (1부터 시작한다고 가정할 때)

// 위와 같이 데이터 형태를 잡는다면 조건을 다음과 같이 잡을 수 있습니다.

// 한 index에 여러 value를 둘 수 없기에 행은 자연스럽게 가지치기 된다.

// index가 같다면 둘 수 없다. 같다면 가지치기 한다.

// 행, 열에 대한 차가 같다면 대각선에 있다는 뜻이므로 가지치기 한다.

// 예를 들어, 1부터 시작한다고 가정할 때 queen[3] = 2, queen[1] = 4일 때 행에 대한 차 3 - 1과 열에 대한 차 4 - 2는 같기 때문에 대각선에 있다는 뜻이다. (절대값으로 계산하면 왼쪽, 오른쪽 둘다 체크 가능하다)

// 이런 방식으로 검사 비용을 아낄 수 있습니다.

// function check(queen, row) {
//   // 이전까지 두었던 퀸의 위치를 확인한다.
//   for (let i = 0; i < row; i += 1) {
//     // 행의 위치와 대각선의 위치를 체크한다.
//     if (
//       queen[i] === queen[row] ||
//       Math.abs(queen[i] - queen[row]) === row - i
//     ) {
//       return false; // 둘 수 없다면 false
//     }
//   }

//   return true; // 모두 통과되면 true
// }

// function search(queen, row) {
//   const n = queen.length;
//   let count = 0;

//   if (n === row) {
//     // 체스판 끝에 도달했다면.. 재귀의 탈출 조건
//     return 1;
//   }

//   for (let col = 0; col < n; col += 1) {
//     // 0부터 n까지 열을 돌면 둘 수 있게 만든다.
//     queen[row] = col; // 우선 퀸을 둔다
//     if (check(queen, row)) {
//       // 퀸을 둘 수 있다면..
//       count += search(queen, row + 1); // 다음 행으로 이동!
//     }
//   }

//   return count;
// }

// function solution(n) {
//   // 미리 n개 만큼의 배열을 초기화한다. 0번 행부터 시작한다.
//   return search(
//     Array.from({ length: n }, () => 0),
//     0
//   );
// }

// function solution(n) {
//   const chessboard = Array.from(Array(n), () => new Array(n).fill(true));
//   let result = 0;

//       chessboard.forEach((row, rowIndex) => {
//         row.forEach((col, colIndex) => {
//           if (chessboard[rowIndex][colIndex]) {
//             insert(chessboard, [rowIndex, colIndex]);
//           }
//         });
//       });

//   chessboard = Array.from(Array(n), () => new Array(n).fill(true));
// }

// function insert(chessboard, position) {
//   const [colP, rowP] = position;

//   chessboard.forEach((row, rowIndex) => {
//     row.forEach((col, colIndex) => {
//       if (
//         Math.abs(rowIndex - rowP) === Math.abs(colIndex - colP) ||
//         rowIndex + colIndex === rowP + colP ||
//         rowIndex === rowP ||
//         colIndex === colP
//       ) {
//         chessboard[rowIndex][colIndex] = false;
//       }
//     });
//   });

//   console.log(chessboard);
// }

// console.log(solution(5));
