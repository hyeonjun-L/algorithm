// You are given an array of integers representing coordinates of obstacles situated on a straight line.

// Assume that you are jumping from the point with coordinate 0 to the right. You are allowed only to make jumps of the same length represented by some integer.

// Find the minimal length of the jump enough to avoid all the obstacles.

// Example

// For inputArray = [5, 3, 6, 7, 9], the output should be
// solution(inputArray) = 4.

// Check out the image below for better understanding:

// Input/Output

// [execution time limit] 4 seconds (js)

// [memory limit] 1 GB

// [input] array.integer inputArray

// Non-empty array of positive integers.

// Guaranteed constraints:
// 2 ≤ inputArray.length ≤ 1000,
// 1 ≤ inputArray[i] ≤ 1000.

// [output] integer

// The desired length.

function solution(inputArray) {
  const max = Math.max(...inputArray);

  for (let i = 1; i < max + 1; i++) {
    let succes = true;
    for (let j = i; j < max + 1; j += i) {
      if (inputArray.includes(j)) {
        succes = false;
        break;
      }
    }
    if (succes) {
      return i;
    }
  }

  return max + 1;
}
