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
        placeQueens(row + 1);
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