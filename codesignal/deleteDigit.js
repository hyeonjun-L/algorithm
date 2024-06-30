// Given some integer, find the maximal number you can obtain by deleting exactly one digit of the given number.

// Example

// For n = 152, the output should be
// solution(n) = 52;
// For n = 1001, the output should be
// solution(n) = 101.
// Input/Output

// [execution time limit] 4 seconds (js)

// [memory limit] 1 GB

// [input] integer n

// Guaranteed constraints:
// 10 ≤ n ≤ 106.

// [output] integer

function solution(n) {
  n = String(n).split("");
  let result = 0;

  for (let i = 0; i < n.length; i++) {
    const sum = n.reduce(
      (acc, value, index) => (index === i ? acc : (acc += value)),
      0
    );

    result = result < sum ? sum : result;
  }

  return Number(result);
}
