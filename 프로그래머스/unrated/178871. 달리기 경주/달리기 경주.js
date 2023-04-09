function solution(players, callings) {
  playersObj = {};
  playersKeyObj = {};
  players.forEach((player, index) => {
    playersObj[player] = index;
    playersKeyObj[index] = player;
  });

  for (let player of callings) {
    playersObj[player] -= 1;
    playersObj[playersKeyObj[playersObj[player]]] += 1;

    const stack = playersKeyObj[playersObj[player]];
    playersKeyObj[playersObj[player]] = player;
    playersKeyObj[playersObj[player] + 1] = stack;
  }
  return Object.values(playersKeyObj);
}