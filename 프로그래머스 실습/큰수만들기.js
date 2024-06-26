// N이 백만이면 O(N), O(N log N) 으로 해결해야한다.
// 큰 값이 나오면 이전 값 중 더 작은 값은 전부다 삭제한다
// 즉, 스택의 바닥에서부터 탑은 큰 수 부터 작은 수로 나열이 되어야 한다.

function solution(number, k) {
  const stack = []; // 가장 큰 숫자를 만들기 위해 스택을 사용합니다.

  for (let i = 0; i < number.length; i++) {
    const num = number[i];

    while (stack.length > 0 && stack[stack.length - 1] < num && k > 0) {
      // 스택의 마지막 숫자가 현재 숫자보다 작으면 제거합니다.
      stack.pop();
      k--;
    }

    stack.push(num); // 현재 숫자를 스택에 추가합니다.
  }

  // 만약 k가 남아있다면 스택의 뒷부분을 제거합니다.
  if (k > 0) {
    stack.splice(-k, k);
  }

  const answer = stack.join("");
  return answer;
}

// function solution(number, k) {
//   let NumArray = number.split("");

//   const sliceNum = NumArray.splice(0, k + 1);
//   const maxNum = Math.max(...sliceNum);
//   k -= sliceNum.splice(0, sliceNum.indexOf(`${maxNum}`)).length;
//   NumArray = (sliceNum.join("") + NumArray.join("")).split("");

//   let index = 0;
//   while (k > 0) {
//     let minNum = Math.min(...NumArray.slice(index, k + 1 + index));
//     NumArray[NumArray.indexOf(`${minNum}`)] = 0;
//     index += k + 1;
//     k--;
//   }

//   return NumArray.filter((num) => num !== 0).join("");
// }

// sliceNum = NumArray.splice(index, k + 1);
//     let minNum = Math.min(...sliceNum);
//     index = sliceNum.indexOf(`${minNum}`);
//     sliceNum.splice(index);
//     k--;

//     NumArray = (sliceNum.join("") + NumArray.join("")).split("");
console.log(solution("1231234", 3));
