function solution(tickets) {    
    const graph = {};
    for (const [a, b] of tickets) {
        if (graph[a] === undefined) {
            graph[a] = [];
        }
        graph[a].push(b);
    }

    for (const key in graph) {
        graph[key].sort((a, b) => a > b ? -1 : 1);
    }

    const stack = ['ICN'];
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