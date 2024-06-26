solution(["mumu", "soe", "poe", "kai", "mine"], ["kai", "kai", "mine", "mine"]);

function solution(players, callings) {
  let maps = {};
  for (let i = 0; i < players.length; i++) {
    maps[players[i]] = i;
  }
  callings.forEach((v) => {
    let num = maps[v];
    let temp = players[num - 1];
    players[num - 1] = v;
    players[num] = temp;
    maps[v]--;
    maps[players[num]]++;
  });
  return Object.entries(maps)
    .sort((a, b) => a[1] - b[1])
    .map((v) => v[0]);
}

// function solution(players, callings) {
//   playersObj = {};
//   playersKeyObj = {};
//   players.forEach((player, index) => {
//     playersObj[player] = index;
//     playersKeyObj[index] = player;
//   });

//   for (let player of callings) {
//     playersObj[player] -= 1;
//     playersObj[playersKeyObj[playersObj[player]]] += 1;

//     const stack = playersKeyObj[playersObj[player]];
//     playersKeyObj[playersObj[player]] = player;
//     playersKeyObj[playersObj[player] + 1] = stack;
//   }
//   return Object.values(playersKeyObj);
// }
