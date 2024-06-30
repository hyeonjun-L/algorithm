// Given an integer product, find the smallest positive (i.e. greater than 0) integer the product of whose digits is equal to product. If there is no such integer, return -1 instead.

// Example

// For product = 12, the output should be
// solution(product) = 26;
// For product = 19, the output should be
// solution(product) = -1.
// Input/Output

// [execution time limit] 4 seconds (js)

// [memory limit] 1 GB

// [input] integer product

// Guaranteed constraints:
// 0 ≤ product ≤ 600.

// [output] integer

function solution(product) {
  if (product === 0) return 10;

  if (product === 1) return 1;

  let result = "";

  for (let divisor = 9; divisor >= 2; divisor--) {
    while (product % divisor === 0) {
      product /= divisor;
      result = divisor + result;
    }
  }

  if (product !== 1) return -1;

  return parseInt(result, 10);
}
