// Given a string, output its longest prefix which contains only digits.

// Example

// For inputString = "123aa1", the output should be
// solution(inputString) = "123".

// Input/Output

// [execution time limit] 4 seconds (js)

// [memory limit] 1 GB

// [input] string inputString

// Guaranteed constraints:
// 3 ≤ inputString.length ≤ 100.

// [output] string

function solution(inputString) {
  let result = "";

  for (let char of inputString) {
    if (char >= "0" && char <= "9") {
      result += char;
    } else {
      break;
    }
  }

  return result;
}
