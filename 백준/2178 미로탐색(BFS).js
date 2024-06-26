const input = `4 6
101111
101010
101011
111011`
  .toString()
  .trim()
  .split("\n");

const [yMax, xMax] = input.shift().split(" ");

const map = input.map((v) => v.split("").map((x) => +x));

const stack = [[0, 0, 1]]; // 행 열 거리

const dir = [
  //상하좌우 배열
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
];
console.log(dir[0][1]);

while (stack.length) {
  const [x, y, dis] = stack.shift();

  for (let i = 0; i < 4; i++) {
    //상하좌우 확인
    const xPos = x + dir[i][0];
    const yPos = y + dir[i][1];

    if (
      // 인접 확인
      0 <= xPos &&
      yPos > -1 &&
      xPos < xMax &&
      yPos < yMax &&
      map[yPos][xPos] === 1
    ) {
      map[yPos][xPos] = dis + 1;
      stack.push([xPos, yPos, dis + 1]);
    }
  }
}

console.log(map);
console.log(map[yMax - 1][xMax - 1]);
