// In the popular Minesweeper game you have a board with some mines and those cells that don't contain a mine have a number in it that indicates the total number of mines in the neighboring cells. Starting off with some arrangement of mines we want to create a Minesweeper game setup.

// Example

// For

// matrix = [[true, false, false],
//           [false, true, false],
//           [false, false, false]]
// the output should be

// solution(matrix) = [[1, 2, 1],
//                     [2, 1, 1],
//                     [1, 1, 1]]
// Check out the image below for better understanding:

// Input/Output

// [execution time limit] 4 seconds (js)

// [memory limit] 1 GB

// [input] array.array.boolean matrix

// A non-empty rectangular matrix consisting of boolean values - true if the corresponding cell contains a mine, false otherwise.

// Guaranteed constraints:
// 2 ≤ matrix.length ≤ 100,
// 2 ≤ matrix[0].length ≤ 100.

// [output] array.array.integer

// Rectangular matrix of the same size as matrix each cell of which contains an integer equal to the number of mines in the neighboring cells. Two cells are called neighboring if they share at least one corner.

function solution(matrix) {
  return matrix.map((row, rowIndex) =>
    row.map((col, colIndex) => {
      let count = 0;

      if (rowIndex > 0 && matrix[rowIndex - 1][colIndex]) {
        count++;
      }

      if (rowIndex > 0 && colIndex > 0 && matrix[rowIndex - 1][colIndex - 1]) {
        count++;
      }

      if (
        rowIndex > 0 &&
        colIndex < row.length - 1 &&
        matrix[rowIndex - 1][colIndex + 1]
      ) {
        count++;
      }

      if (colIndex > 0 && matrix[rowIndex][colIndex - 1]) {
        count++;
      }

      if (colIndex < row.length - 1 && matrix[rowIndex][colIndex + 1]) {
        count++;
      }

      if (
        colIndex > 0 &&
        rowIndex < matrix.length - 1 &&
        matrix[rowIndex + 1][colIndex - 1]
      ) {
        count++;
      }

      if (
        colIndex < row.length - 1 &&
        rowIndex < matrix.length - 1 &&
        matrix[rowIndex + 1][colIndex + 1]
      ) {
        count++;
      }

      if (rowIndex < matrix.length - 1 && matrix[rowIndex + 1][colIndex]) {
        count++;
      }

      return count;
    })
  );
}

function solution(matrix) {
  const directions = [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, -1],
    [0, 1],
    [1, -1],
    [1, 0],
    [1, 1],
  ];

  const rows = matrix.length;
  const cols = matrix[0].length;
  const result = Array.from({ length: rows }, () => Array(cols).fill(0));

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (matrix[r][c]) {
        directions.forEach(([dr, dc]) => {
          const newRow = r + dr;
          const newCol = c + dc;
          if (newRow >= 0 && newRow < rows && newCol >= 0 && newCol < cols) {
            result[newRow][newCol]++;
          }
        });
      }
    }
  }

  return result;
}
