function solution(prices) {
  const stack = [];
  const answer = Array.from(prices, (_, i) => prices.length - i - 1);

  prices.forEach((price, index) => {
    while (stack.length && prices[stack.at(-1)] > price) {
      const stackIndex = stack.at(-1);
      answer[stackIndex] = index - stackIndex;
      stack.pop();
    }
    stack.push(index);
  });

  return answer;
}
