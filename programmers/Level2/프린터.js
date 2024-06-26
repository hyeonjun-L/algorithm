console.log(solution([1, 1, 9, 1, 1, 1], 0));

function solution(priorities, location) {
  const myDocuments = String(priorities[location]);
  priorities[location] = myDocuments;

  let outNumber = 0;
  let count = 0;
  while (outNumber !== myDocuments) {
    let maxNumber = Math.max(...priorities);
    outNumber = priorities.shift();
    if (maxNumber > outNumber) {
      priorities.push(outNumber);
      outNumber = 0;
    } else {
      count++;
    }
  }

  return count;
}

// to pointer 방식 (선형 큐)
function solution(priorities, location) {
  let result = 0;
  let index = 0;
  let shift = 0;
  priorities[location] = `${priorities[location]}`;

  while (typeof shift !== "string") {
    shift = priorities[index];
    if (priorities.slice(index).find((value) => value > shift) ?? false) {
      priorities.push(shift);
      shift = 0;
    } else {
      result++;
    }
    index++;
  }
  return result;
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// arr.push(arr.shift()); 시간초과

// function solution(priorities, location) {
//     const myDocuments = String(priorities[location]);
//     priorities[location] = myDocuments;

//     const arr = [...priorities];
//     stringPriorities = priorities.sort((a, b) => b - a).join("");

//     let index = 0;
//     while (arr.join("") !== stringPriorities) {
//       arr[arr.length] = arr[index];
//       arr[index] = "";
//       index++;
//     }

//     return arr.indexOf(myDocuments) - index + 1;
//   } 이것도 시간초과
