// Example

// For inputArray = ["aba", "bbb", "bab"], the output should be
// solution(inputArray) = false.

// There are 6 possible arrangements for these strings:

// ["aba", "bbb", "bab"]
// ["aba", "bab", "bbb"]
// ["bbb", "aba", "bab"]
// ["bbb", "bab", "aba"]
// ["bab", "bbb", "aba"]
// ["bab", "aba", "bbb"]
// None of these satisfy the condition of consecutive strings differing by 1 character, so the answer is false.

// For inputArray = ["ab", "bb", "aa"], the output should be
// solution(inputArray) = true.

// It's possible to arrange these strings in a way that each consecutive pair of strings differ by 1 character (eg: "aa", "ab", "bb" or "bb", "ab", "aa"), so return true.

// Input/Output

// [execution time limit] 4 seconds (js)

// [memory limit] 1 GB

// [input] array.string inputArray

// A non-empty array of strings of lowercase letters.

// Guaranteed constraints:
// 2 ≤ inputArray.length ≤ 10,
// 1 ≤ inputArray[i].length ≤ 15.

// [output] boolean

// Return true if the strings can be reordered in such a way that each neighbouring pair of strings differ by exactly one character (false otherwise).

function solution(inputArray) {
  function differByOneChar(str1, str2) {
    let diffCount = 0;
    for (let i = 0; i < str1.length; i++) {
      if (str1[i] !== str2[i]) {
        diffCount++;
      }
      if (diffCount > 1) {
        return false;
      }
    }
    return diffCount === 1;
  }

  function permutations(arr) {
    let result = [];

    function generate(n, heapArr) {
      console.log(n, heapArr);
      if (n === 1) {
        result.push(heapArr.slice());
      } else {
        for (let i = 0; i < n; i++) {
          generate(n - 1, heapArr);
          const j = n % 2 ? 0 : i;
          [heapArr[n - 1], heapArr[j]] = [heapArr[j], heapArr[n - 1]];
        }
      }
    }

    generate(arr.length, arr.slice());
    return result;
  }

  for (const perm of permutations(inputArray)) {
    let valid = true;
    for (let i = 0; i < perm.length - 1; i++) {
      if (!differByOneChar(perm[i], perm[i + 1])) {
        valid = false;
        break;
      }
    }
    if (valid) {
      return true;
    }
  }

  return false;
}
