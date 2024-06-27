console.log(solution(3));
console.log(solution(5));

function solution(n) {
  let a = 1n;
  let b = 1n;
  let answer;

  for (let i = 1; i <= n - 2; i++) {
    answer = a + b;
    b = a;
    a = answer;
  }

  return answer % 1234567n;
}

/* 
0
a = 0        
b = 1
answer = 1

1
a = 1
b = 1
answer = 2

2
a = 2   
b = 1
answer = 3

3
a = 3   
b = 2
answer = 5

4
a = 5
b = 3
answer = 8

5
a = 8
b = 5
answer = 13

*/
