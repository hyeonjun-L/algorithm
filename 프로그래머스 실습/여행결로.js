console.log(
  solution([
    ["ICN", "A"],
    ["A", "B"],
    ["A", "C"],
    ["C", "A"],
    ["B", "D"],
  ])
);

function solution(tickets) {
  const graph = {};
  for (const [a, b] of tickets) {
    if (graph[a] === undefined) {
      graph[a] = [];
    }
    graph[a].push(b);
  }

  for (const key in graph) {
    graph[key].sort((a, b) => (a > b ? -1 : 1));
  }

  const stack = ["ICN"];
  const answer = [];

  while (stack.length > 0) {
    const currentAirport = stack[stack.length - 1];
    if (graph[currentAirport] && graph[currentAirport].length > 0) {
      stack.push(graph[currentAirport].pop());
    } else {
      answer.push(stack.pop());
    }
  }

  return answer.reverse();
}

// function solution(tickets) {
//   const airportObj = {};
//   for (let [aTicket, bTicket] of tickets) {
//     if (aTicket in airportObj) {
//       if (aTicket === "ICN") {
//         airportObj[aTicket] = [...airportObj[aTicket], bTicket].sort();
//       }
//       airportObj[aTicket] = [...airportObj[aTicket], bTicket];
//     } else {
//       airportObj[aTicket] = [bTicket];
//     }
//   }

//   for (let ICN of airportObj["ICN"]) {
//     const obj = JSON.parse(JSON.stringify(airportObj));
//     obj["ICN"] = obj["ICN"].filter((element) => element !== ICN);
//     const result = BFS(ICN, obj);
//     if (result.length === tickets.length + 1) {
//       return result;
//     }
//   }
// }

// function BFS(start, airportObj) {
//   const queue = [start];
//   const visited = ["ICN"];

//   while (queue.length > 0) {
//     const start = queue.shift();
//     visited.push(start);

//     if (airportObj[start] && airportObj[start].length) {
//       queue.push(airportObj[start].shift());
//     }
//   }

//   return visited;
// }

// function solution(tickets) {
//   const airportObj = {};
//   for (let [aTicket, bTicket] of tickets) {
//     if (aTicket in airportObj) {
//       airportObj[aTicket] = [...airportObj[aTicket], bTicket];
//     } else {
//       airportObj[aTicket] = [bTicket];
//     }
//   }

//   for (let ICN of airportObj["ICN"]) {
//     const result = BFS(ICN, JSON.parse(JSON.stringify(airportObj)));
//     if (result.length === tickets.length + 1) {
//       return result;
//     }
//   }
// }

// function BFS(start, airportObj) {
//   airportObj["ICN"] = airportObj["ICN"].filter((element) => element !== start);

//   console.log(airportObj["ICN"]);
//   const queue = airportObj[start];
//   const visited = ["ICN", start];

//   while (queue.length > 0) {
//     const start = queue.shift(); //
//     visited.push(start);

//     if (airportObj[start] && airportObj[start].length) {
//       queue.push(airportObj[start].shift());
//     }
//   }

//   return visited;
// }

// function solution(tickets) {
//     const airportObj = {};
//     for (let [aTicket, bTicket] of tickets) {
//       if (aTicket in airportObj) {
//         airportObj[aTicket] = [...airportObj[aTicket], bTicket].sort();
//       } else {
//         airportObj[aTicket] = [bTicket];
//       }
//     }

//       console.log(airportObj)
//     const visited = [];
//     const queue = ["ICN"];

//     while (queue.length > 0) {
//       const start = queue.shift();
//       visited.push(start);

//       if (airportObj[start]) {
//         queue.push(airportObj[start].shift());
//       }
//     }

//     return visited;
//   }
