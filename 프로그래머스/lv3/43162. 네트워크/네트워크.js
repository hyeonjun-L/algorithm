function solution(n, computers) {
  const edges = Array.from(Array(n), () => []);

  computers.forEach((computer, i) => {
    computer.forEach((connect, j) => {
      if (connect) edges[i].push(j);
    });
  });

  const visited = Array(n).fill(false); // 방문 체크 배열
  let count = 0; // 네트워크 개수

  // BFS 함수
  const bfs = (start) => {
    const queue = [start]; // 시작 노드를 큐에 추가
    visited[start] = true; // 시작 노드를 방문 체크

    while (queue.length > 0) {
      const node = queue.shift(); // 큐에서 노드를 하나 꺼내옴

      for (let i = 0; i < edges[node].length; i++) {
        const nextNode = edges[node][i]; // 현재 노드와 연결된 노드

        if (!visited[nextNode]) {
          // 방문하지 않은 노드라면
          queue.push(nextNode); // 큐에 추가
          visited[nextNode] = true; // 방문 체크
        }
      }
    }
  };

  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      // 방문하지 않은 노드라면
      bfs(i); // BFS 수행
      count++; // 네트워크 개수 증가
    }
  }

  return count;
}