console.log(
  solution([
    [1, 0, 1, 1, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 1, 1],
    [1, 1, 1, 0, 1],
    [0, 0, 0, 0, 1],
  ])
);

function solution(maps) {
  let [xMax, yMax] = [maps.length - 1, maps[0].length - 1];

  const dir = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];

  const queue = [[0, 0, 1]]; // 위치 와 지나온 거리를 기록

  while (queue.length) {
    const [x, y, dis] = queue.shift();

    if (x === xMax && y === yMax) {
      return dis;
    }

    for (let i = 0; i < 4; i++) {
      const [dx, dy] = dir[i];
      const xPos = x + dx;
      const yPos = y + dy;

      if (
        xPos < 0 ||
        yPos < 0 ||
        xPos > xMax ||
        yPos > yMax ||
        maps[xPos][yPos] === 0
      ) {
        continue;
      }

      maps[xPos][yPos] = 0;
      queue.push([xPos, yPos, dis + 1]);
    }
  }
  return -1;
}

//-----------------------------------------------------------------------

function solution(maps) {
  let [xMax, yMax] = [maps.length, maps[0].length];

  const dir = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];

  const queue = [[0, 0, 1]];

  while (queue.length) {
    const [x, y, dis] = queue.shift();

    for (let i = 0; i < 4; i++) {
      const xPos = x + dir[i][0];
      const yPos = y + dir[i][1];

      if (
        0 <= xPos &&
        yPos >= 0 &&
        xPos < xMax &&
        yPos < yMax &&
        maps[xPos][yPos] === 1
      ) {
        maps[xPos][yPos] = dis + 1;
        queue.push([xPos, yPos, dis + 1]);
      }
    }
  }
  return maps[xMax - 1][yMax - 1] === 1 ? -1 : maps[xMax - 1][yMax - 1];
}
