// Correct variable names consist only of English letters, digits and underscores and they can't start with a digit.

// Check if the given string is a correct variable name.

// Example

// For name = "var_1__Int", the output should be
// solution(name) = true;
// For name = "qq-q", the output should be
// solution(name) = false;
// For name = "2w2", the output should be
// solution(name) = false.
// Input/Output

// [execution time limit] 4 seconds (js)

// [memory limit] 1 GB

// [input] string name

// Guaranteed constraints:
// 1 ≤ name.length ≤ 10.

// [output] boolean

// true if name is a correct variable name, false otherwise.

function solution(name) {
  const reg = new RegExp(/[A-Za-z0-9]/);

  if (!isNaN(name[0])) {
    return false;
  }

  for (let i = 0; i < name.length; i++) {
    if (!(reg.test(name[i]) || name[i] === "_")) {
      return false;
    }
  }

  return true;
}
