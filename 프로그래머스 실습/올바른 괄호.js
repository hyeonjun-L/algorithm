function solution(s) {
  const stack = [];

  for (let bracket of s) {
    if (bracket === "(") {
      stack.push("(");
    } else {
      if (stack.length) {
        return false;
      }
      stack.pop();
    }
  }
  return stack.length ? false : true;
}

console.log(solution("()()"));
