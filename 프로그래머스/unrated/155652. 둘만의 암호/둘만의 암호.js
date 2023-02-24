function solution(s, skip, index) {
  let skipSet = new Set(skip.split(""));
  let answer = "";
  for (let alphabet of s) {
    let ASCII = alphabet.charCodeAt(0);
    let count = 0;
    while (count !== index) {
      ASCII += 1;
      if (ASCII > 122) ASCII = 97;
      if (!skipSet.has(String.fromCharCode(ASCII))) {
        count++;
      }
    }
    answer += String.fromCharCode(ASCII);
  }
  return answer;
}