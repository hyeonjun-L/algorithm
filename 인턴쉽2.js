console.log(
  solution([
    [2, 3],
    [4, 3],
    [1, 1],
    [2, 1],
  ])
);

console.log(
  solution([
    [4, 11],
    [1, 12],
    [8, 3],
    [12, 7],
    [4, 2],
    [7, 11],
    [4, 8],
    [9, 6],
    [10, 11],
    [6, 10],
    [3, 5],
    [11, 1],
    [5, 3],
    [11, 9],
    [3, 8],
  ])
);
function solution(edges) {
  const graph = {};
  const visited = {};
  const startNodes = new Set();
  let donut = 0,
    stick = 0,
    eight = 0;

  for (let [from, to] of edges) {
    if (!graph[from]) graph[from] = [];
    graph[from].push(to);
    startNodes.add(from);
    startNodes.delete(to);
  }

  const createNode = startNodes.values().next().value;

  const dfs = (node, parent, depth) => {
    if (visited[node]) {
      if (depth - visited[node] === 1) {
        stick++;
      } else if (depth - visited[node] === 2) {
        eight++;
      } else {
        donut++;
      }
      return;
    }

    visited[node] = depth;
    if (graph[node]) {
      for (let next of graph[node]) {
        if (next !== parent) {
          dfs(next, node, depth + 1);
        }
      }
    }
  };

  dfs(createNode, null, 1);

  return [parseInt(createNode), donut, stick, eight];
}
