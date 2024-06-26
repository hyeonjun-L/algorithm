const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt"
let input = fs.readFileSync(filePath).toString().trim().split("\n")

let [n, m, v] = input[0].split(" ").map(Number)
let graph = new Array(n + 1)
for (let i = 0; i < graph.length; i++) {
  graph[i] = []
}
for (let i = 0; i < m; i++) {
  let [from, to] = input[i + 1].split(" ").map(Number)
  graph[from].push(to)
  graph[to].push(from)
}
graph.forEach((element) => {
    element.sort((a, b) => a - b);
  })

  const BFS = (graph, startNode) => {
    const visited = [] // 탐색을 마친 노드들
    let needVisit = [] // 탐색해야할 노드들
  
    needVisit.push(startNode) // 노드 탐색 시작
  
    while (needVisit.length !== 0) { // 탐색해야할 노드가 남아있다면
      const node = needVisit.shift() // queue이기 때문에 선입선출, shift()를 사용한다.
      if (!visited.includes(node)) { // 해당 노드가 탐색된 적 없다면
        visited.push(node);
        needVisit = [...needVisit, ...graph[node]]
      }
    }
    return visited
  }
  
  const DFS = (graph, startNode) => {
    const visited = []
    let needVisit = []
  
    needVisit.push(startNode)
  
    while (needVisit.length !== 0) {
      const node = needVisit.shift()
      if (!visited.includes(node)) {
        visited.push(node);
        needVisit = [...graph[node], ...needVisit]
      }
    }
    return visited
  }

console.log(DFS(graph, v).join(' '))
console.log(BFS(graph, v).join(' '))
