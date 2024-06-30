// Define a word as a sequence of consecutive English letters. Find the longest word from the given string.

// Example

// For text = "Ready, steady, go!", the output should be
// solution(text) = "steady".

// Input/Output

// [execution time limit] 4 seconds (js)

// [memory limit] 1 GB

// [input] string text

// Guaranteed constraints:
// 4 ≤ text.length ≤ 50.

// [output] string

// The longest word from text. It's guaranteed that there is a unique output.

function solution(text) {
  const words = text.match(/[a-zA-Z]+/g);

  return words.reduce(
    (acc, value) => (acc.length < value.length ? value : acc),
    ""
  );
}
