// Given a string, find out if its characters can be rearranged to form a palindrome.

// Example

// For inputString = "aabb", the output should be
// solution(inputString) = true.

// We can rearrange "aabb" to make "abba", which is a palindrome.

// Input/Output

// [execution time limit] 4 seconds (js)

// [memory limit] 1 GB

// [input] string inputString

// A string consisting of lowercase English letters.

// Guaranteed constraints:
// 1 ≤ inputString.length ≤ 50.

// [output] boolean

// true if the characters of the inputString can be rearranged to form a palindrome, false otherwise.

function solution(inputString) {
  let buffer = {};

  inputString.split("").forEach((value) => {
    buffer = { ...buffer, [value]: buffer[value] ? buffer[value] + 1 : 1 };
  });

  let even = 0;
  for (let value of Object.values(buffer)) {
    if (value % 2 === 1) {
      even += 1;
      if (even > 1) {
        return false;
      }
    }
  }

  return true;
}
