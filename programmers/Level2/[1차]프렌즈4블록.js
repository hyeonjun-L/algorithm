// console.log(solution(2, 4, ["baab", "baab"]));
// console.log(solution(4, 5, ["CCBDE", "AAADE", "AAABF", "CCBBF"]));
// console.log(
//   solution(6, 6, ["TTTANT", "RRFACC", "RRRFCC", "TRRRAA", "TTMMMF", "TMMTTJ"])
// );
// console.log(solution(4, 5, ["AAAAA", "AUUUA", "AUUAA", "AAAAA"]));
// console.log(solution(2, 2, ["AA", "AA"]));
// console.log(solution(2, 2, ["AA", "AB"]));
// console.log(solution(3, 2, ["AA", "AA", "AB"]));
// console.log(solution(4, 2, ["CC", "AA", "AA", "CC"]));
// console.log(solution(6, 2, ["DD", "CC", "AA", "AA", "CC", "DD"]));
// console.log(solution(8, 2, ["FF", "AA", "CC", "AA", "AA", "CC", "DD", "FF"]));
// console.log(solution(6, 2, ["AA", "AA", "CC", "AA", "AA", "DD"]));
// console.log(solution(4, 4, ["ABCD", "BACE", "BCDD", "BCDD"]));
// console.log(
//   solution(8, 9, [
//     "ABCDADFDA",
//     "ABDFQWERF",
//     "WKDNFNRIT",
//     "AKAKWODCJ",
//     "AKAKWODCJ",
//     "KKKKKKKKK",
//     "KKKKKKKKK",
//     "KKKKKKKKK",
//   ])
// );
// console.log(solution(4, 5, ["AAAAA", "AAAAU", "AAAUU", "UUUUU"]));
console.log(solution(5, 6, ["AAAAAA", "BBAATB", "BBAATB", "JJJTAA", "JJJTAA"]));
// console.log(
//   solution(6, 6, ["AABBEE", "AAAEEE", "VAAEEV", "AABBEE", "AACCEE", "VVCCEE"])
// );

function solution(m, n, boards) {
  boards = boards.map((board) => board.split(""));
  let q = [];
  let count = 0;
  let beforeCount = -1;

  console.log(boards);
  while (count !== beforeCount) {
    // 5. 겹치는 부분 없을때 까지 1~4 반복 진행
    beforeCount = count;
    for (let col = 0; col < m - 1; col++) {
      for (let row = 0; row < n - 1; row++) {
        if (boards[col][row] === "") {
          continue;
        }
        if (
          boards[col][row] === boards[col][row + 1] &&
          boards[col][row] === boards[col + 1][row] &&
          boards[col][row + 1] === boards[col + 1][row + 1]
        ) {
          // 1. 위에서 아래로 2x2 이상 찾기
          let duplication = boards[col][row];
          while (boards[col][row] === duplication) {
            duplication = boards[col][row];
            if (boards[col][row] === boards[col + 1][row]) {
              boards[col][row] = 0;
              q.push([col + 1, row]);
            } else {
              break;
            }
            row++;
          }
          // 2. 위에서 아래 겹치는 부분 제거 후 아래 라인은 지워야 하는 인덱스로만 기록
        }
      }
    }
    console.log(boards);
    while (q.length > 0) {
      let [Qcol, Qrow] = q.shift();
      boards[Qcol][Qrow] = 0;
    }

    console.log(boards);
    for (let col = 0; col < m - 1; col++) {
      for (let row = 0; row < n; row++) {
        if (boards[col + 1][row] === 0) {
          for (let moveCol = col + 1; moveCol > 0; moveCol--) {
            boards[moveCol][row] = boards[moveCol - 1][row];
            boards[moveCol - 1][row] = "";
          }
          count++;
        }
      }
    }

    console.log(boards);
    // 4. 3번까지 모든 루트 돌고나서 블록 다운
  }
  return count;
}

// boards.forEach((board, col) => {
//   console.log(board);
//   if (board[col + 1]) {
//     board.split("").forEach((character, row) => {
//       console.log(board[row + 1]);
//     });
//   }
// });

// if (
//   character === board[row + 1] &&
//   character === boards[col + 1][row] &&
//   character === boards[col + 1][row + 1]
// ) {
// }
