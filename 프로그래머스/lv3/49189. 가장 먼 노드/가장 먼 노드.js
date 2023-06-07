function solution(n, edge) {
  const graph = Array.from(Array(n + 1), () => []); // 각 노드의 연결된 노드들을 저장하는 그래프
  const distances = Array(n + 1).fill(-1); // 1번 노드로부터의 최단 거리를 저장하는 배열
  const queue = [];

  // 그래프 생성
  for (let [nodeX, nodeY] of edge) {
    graph[nodeX].push(nodeY);
    graph[nodeY].push(nodeX);
  }

  // BFS 탐색
  queue.push(1); // 1번 노드부터 시작
  distances[1] = 0; // 1번 노드의 최단 거리는 0

  while (queue.length > 0) {
    const currentNode = queue.shift();

    for (let nextNode of graph[currentNode]) {
      if (distances[nextNode] === -1) {
        // 아직 방문하지 않은 노드인 경우
        distances[nextNode] = distances[currentNode] + 1; // 최단 거리 갱신
        queue.push(nextNode);
      }
    }
  }

  const maxDistance = Math.max(...distances.slice(1)); // 1번 노드로부터 가장 멀리 떨어진 거리
  const count = distances.filter((distance) => distance === maxDistance).length; // 가장 멀리 떨어진 노드의 개수

  return count;
}