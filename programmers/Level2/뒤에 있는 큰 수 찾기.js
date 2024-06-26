console.log(solution([2, 3, 3, 5]));

function solution(numbers) {
  const stack = [];
  const answer = new Array(numbers.length).fill(-1);

  for (let i = 0; i < numbers.length; i++) {
    while (stack.length > 0 && numbers[stack[stack.length - 1]] < numbers[i]) {
      answer[stack.pop()] = numbers[i];
    }
    stack.push(i);
  }
  return answer;
}

////////////////////////////////////////////////20, 21, 22, 23 시간초과
function solution3(numbers) {
  // 전 숫자 및 인덱스 저장 오브젝트
  let stack = {};

  numbers.forEach((number, index) => {
    //작은값 큰값으로 변경
    let smallValueArray = Object.keys(stack).filter((value) => value < number);
    if (smallValueArray.length) {
      for (let smallValue of smallValueArray) {
        for (let i of stack[smallValue]) {
          numbers[i] = number;
          delete stack[smallValue];
        }
      }
    }
    // 중복 숫자 해결 ex) 2, "3, 3,"" 5
    if (stack[number]) {
      stack[number] = [...stack[number], index];
    } else {
      stack[number] = [index];
    }
  });
  //남은 스택
  for (let value of Object.keys(stack)) {
    for (let i of stack[value]) {
      numbers[i] = -1;
    }
  }

  return numbers;
}

///////////////////1. 자기 자신이랑 '같거나 작은거 스킵' 후 큰 값 만났을때 스킵된거 동시에 변경
// 반례 [9, 1, 5, 1, 2, 3, 4, 5, 6, 2] => [  -1, 5, 6,  6,  6,  6, 6, 6, -1, -1]
function solution2(numbers) {
  const answer = [];

  for (let i = 0; i < numbers.length; i++) {
    let skipIndex = 0;
    const bigValue =
      numbers.slice(i).find((number) => {
        if (number > numbers[i]) {
          return number;
        } else {
          skipIndex++;
        }
      }) ?? -1;
    if (bigValue === -1) {
      answer.push(-1);
    } else {
      answer.push(...new Array(skipIndex).fill(bigValue));
      i += skipIndex - 1;
    }
  }
  console.log(answer);
}

//////////////////////////////////////////////시간 복잡도 에러

function solution1(numbers) {
  return numbers.map((number, index) => {
    return numbers.slice(index).find((value) => value > number) ?? -1;
  });
}
