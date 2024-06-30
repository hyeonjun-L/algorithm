// Given a position of a knight on the standard chessboard, find the number of different moves the knight can perform.

// The knight can move to a square that is two squares horizontally and one square vertically, or two squares vertically and one square horizontally away from it. The complete move therefore looks like the letter L. Check out the image below to see all valid moves for a knight piece that is placed on one of the central squares.

// Example

// For cell = "a1", the output should be
// solution(cell) = 2.

// For cell = "c2", the output should be
// solution(cell) = 6.

// Input/Output

// [execution time limit] 4 seconds (js)

// [memory limit] 1 GB

// [input] string cell

// String consisting of 2 letters - coordinates of the knight on an 8 × 8 chessboard in chess notation.

// Guaranteed constraints:
// cell.length = 2,
// 'a' ≤ cell[0] ≤ 'h',
// 1 ≤ cell[1] ≤ 8.

// [output] integer

function solution(cell) {
  cell = cell.split("");

  const rowBuffer = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
  };

  const row = rowBuffer[cell[0]];
  const col = parseInt(cell[1]);

  function isWithinBoard(x, y) {
    return x >= 1 && x <= 8 && y >= 1 && y <= 8;
  }

  const moves = [
    [row + 2, col + 1],
    [row + 2, col - 1],
    [row - 2, col + 1],
    [row - 2, col - 1],
    [row + 1, col + 2],
    [row + 1, col - 2],
    [row - 1, col + 2],
    [row - 1, col - 2],
  ];

  let result = 0;

  for (const [newX, newY] of moves) {
    if (isWithinBoard(newX, newY)) {
      result++;
    }
  }

  return result;
}
