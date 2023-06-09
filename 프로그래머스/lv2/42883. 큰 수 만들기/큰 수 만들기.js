function solution(number, k) {
  const stack = [];
  for (let i = 0; i < number.length; i++) {
    const num = number[i];
    while (stack.length > 0 && stack[stack.length - 1] < num && k > 0) {
      stack.pop();
      k--;
    }
    stack.push(num);
  }
  if (k > 0) {
    stack.splice(-k, k);
  }
  const answer = stack.join('');
  return answer;
}