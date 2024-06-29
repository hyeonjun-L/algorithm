// Given two cells on the standard chess board, determine whether they have the same color or not.

// Example

// For cell1 = "A1" and cell2 = "C3", the output should be
// solution(cell1, cell2) = true.

// For cell1 = "A1" and cell2 = "H3", the output should be
// solution(cell1, cell2) = false.

// Input/Output

// [execution time limit] 4 seconds (js)

// [memory limit] 1 GB

// [input] string cell1

// Guaranteed constraints:
// cell1.length = 2,
// 'A' ≤ cell1[0] ≤ 'H',
// 1 ≤ cell1[1] ≤ 8.

// [input] string cell2

// Guaranteed constraints:
// cell2.length = 2,
// 'A' ≤ cell2[0] ≤ 'H',
// 1 ≤ cell2[1] ≤ 8.

// [output] boolean

// true if both cells have the same color, false otherwise.

function solution(cell1, cell2) {
  const board = Array.from({ length: 8 }, (_, colIndex) =>
    Array.from({ length: 8 }, (_, index) => {
      if (index % 2 === 0) {
        return colIndex % 2 === 0 ? 1 : 0;
      } else {
        return colIndex % 2 === 0 ? 0 : 1;
      }
    })
  );

  const positon = {
    A: 0,
    B: 1,
    C: 2,
    D: 3,
    E: 4,
    F: 5,
    G: 6,
    H: 7,
  };

  const [row1, col1] = cell1.split("");
  const [row2, col2] = cell2.split("");

  return board[positon[row1]][8 - col1] === board[positon[row2]][8 - col2];
}
