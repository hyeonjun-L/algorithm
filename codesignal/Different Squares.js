// Given a rectangular matrix containing only digits, calculate the number of different 2 × 2 squares in it.

// Example

// For

// matrix = [[1, 2, 1],
//           [2, 2, 2],
//           [2, 2, 2],
//           [1, 2, 3],
//           [2, 2, 1]]
// the output should be
// solution(matrix) = 6.

// Here are all 6 different 2 × 2 squares:

// 1 2
// 2 2
// 2 1
// 2 2
// 2 2
// 2 2
// 2 2
// 1 2
// 2 2
// 2 3
// 2 3
// 2 1
// Input/Output

// [execution time limit] 4 seconds (js)

// [memory limit] 1 GB

// [input] array.array.integer matrix

// Guaranteed constraints:
// 1 ≤ matrix.length ≤ 100,
// 1 ≤ matrix[i].length ≤ 100,
// 0 ≤ matrix[i][j] ≤ 9.

// [output] integer

// The number of different 2 × 2 squares in matrix.

function solution(matrix) {
  const rows = matrix.length;
  const cols = matrix.length;
  const squares = new Set();

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols - 1; j++) {
      const square = [
        matrix[i][j],
        matrix[i][j + 1],
        matrix[i + 1][j],
        matrix[i + 1][j + 1],
      ].join(",");

      squares.add(square);
    }
  }

  return squares.size;
}
