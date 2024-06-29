// Given an array of integers, find the maximal absolute difference between any two of its adjacent elements.

// Example

// For inputArray = [2, 4, 1, 0], the output should be
// solution(inputArray) = 3.

// Input/Output

// [execution time limit] 4 seconds (js)

// [memory limit] 1 GB

// [input] array.integer inputArray

// Guaranteed constraints:
// 3 ≤ inputArray.length ≤ 10,
// -15 ≤ inputArray[i] ≤ 15.

// [output] integer

// The maximal absolute difference.

function solution(inputArray) {
  return inputArray.reduce((acc, value, index) => {
    return inputArray[index + 1]
      ? Math.max(acc, Math.abs(value - inputArray[index + 1]))
      : acc;
  }, 0);
}
