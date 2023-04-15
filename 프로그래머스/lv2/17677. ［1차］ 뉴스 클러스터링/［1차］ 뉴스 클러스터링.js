function solution(str1, str2) {
  const arr1 = collect(str1.toUpperCase());
  const arr2 = collect(str2.toUpperCase());
  let intersection = 0;
  let union = 0;
  let index = arr1.length - 1;
    
  if (arr1.length + arr2.length === 0) return 65536;
  while (arr1.length !== 0) {
    let include = arr2.indexOf(arr1[index]);
    if (include !== -1) {
      union++;
      intersection++;
      arr2.splice(include, 1);
      arr1.pop();
    } else {
      union++;
      arr1.pop();
    }
    index--;
  }
    return Math.floor((intersection / (union + arr2.length)) * 65536);
}

function collect(str) {
  const arr = [];
  const regExp = /^[A-Z]*$/;
  for (let i = 0; i < str.length - 1; i++) {
    let word = str[i] + str[i + 1];
    if (regExp.test(word)) {
      arr.push(word);
    }
  }
  return arr;
}
