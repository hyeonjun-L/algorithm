function solution(maps) {
  let [xMax, yMax] = [maps.length, maps[0].length];

  const dir = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];

  const stack = [[0, 0, 1]];

  while (stack.length) {
    const [x, y, dis] = stack.shift();

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
        stack.push([xPos, yPos, dis + 1]);
      }
    }
  } 
  return maps[xMax - 1][yMax - 1] === 1 ? -1 : maps[xMax - 1][yMax - 1];
}