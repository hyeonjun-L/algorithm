function solution(n, edge) {
  const graph = Array.from(Array(n + 1), () => []);
  const distances = Array(n + 1).fill(-1);
  const queue = [];

  for (let [nodeX, nodeY] of edge) {
    graph[nodeX].push(nodeY);
    graph[nodeY].push(nodeX);
  }

  queue.push(1);
  distances[1] = 0;

  while (queue.length > 0) {
    const currentNode = queue.shift();

    for (let nextNode of graph[currentNode]) {
      if (distances[nextNode] === -1) {
        distances[nextNode] = distances[currentNode] + 1;
        queue.push(nextNode);
      }
    }
  }

  const maxDistance = Math.max(...distances.slice(1));
  const result = distances.filter(
    (distance) => distance === maxDistance
  ).length;

  return result;
}
console.log(
  solution(6, [
    [3, 6],
    [4, 3],
    [3, 2],
    [1, 3],
    [1, 2],
    [2, 4],
    [5, 2],
  ])
);

[[], [3, 2], [3, 1, 4, 5], [6, 4, 2, 1], [3, 2], [2], [3]],
  [
    [false, false, false, false, false, false, false],
    [false, false, 2, 3, false, false, false],
    [false, 1, false, 3, 4, 5, false],
    [false, 1, 2, false, 4, false, 6],
    [false, false, 2, 3, false, false, false],
    [false, false, 2, false, false, false, false],
    [false, false, false, 3, false, false, false],
  ];

function solution1(maps) {
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
