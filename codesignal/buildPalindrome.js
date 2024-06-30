// Given a string, find the shortest possible string which can be achieved by adding characters to the end of initial string to make it a palindrome.

// Example

// For st = "abcdc", the output should be
// solution(st) = "abcdcba".

// Input/Output

// [execution time limit] 4 seconds (js)

// [memory limit] 1 GB

// [input] string st

// A string consisting of lowercase English letters.

// Guaranteed constraints:
// 3 ≤ st.length ≤ 10.

// [output] string

function solution(st) {
  const reverseSt = st.split("").reverse().join("");
  let buffer = "";

  if (checkString(st)) {
    return st;
  }

  for (let i = 0; i < st.length; i++) {
    buffer += st[i];
    const newString = buffer + reverseSt;
    if (checkString(newString)) {
      return newString;
    }
  }
}

function checkString(st) {
  for (let i = 0; i < Math.floor(st.length / 2); i++) {
    if (st[i] !== st[Math.abs(i - st.length + 1)]) {
      return false;
    }
  }

  return true;
}

function solution(st) {
  const len = st.length;

  const reversed = st.split("").reverse().join("");

  for (let i = 0; i < len; i++) {
    if (st.substring(i) === reversed.substring(0, len - i)) {
      return st + reversed.substring(len - i);
    }
  }

  return st + reversed.substring(1);
}
