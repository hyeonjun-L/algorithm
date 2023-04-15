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

