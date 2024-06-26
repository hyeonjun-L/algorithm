console.log(solution("TOBEORNOTTOBEORTOBEORNOT"));

function solution(msg) {
  const dictionary = {};
  const answer = [];
  for (let i = 1; i < 27; i++) {
    dictionary[String.fromCharCode(64 + i)] = i;
  }

  for (let i = 0; i < msg.length; i++) {
    let count = 1;
    let wc = msg[i];

    while (true) {
      wc += msg[i + count] !== undefined ? msg[i + count] : "X";
      if (!dictionary[wc]) {
        dictionary[wc] = Object.values(dictionary).length + 1;
        answer.push(dictionary[wc.slice(0, -1)]);
        i += count - 1;
        break;
      } else {
        count++;
      }
    }
  }
  return answer;
}
