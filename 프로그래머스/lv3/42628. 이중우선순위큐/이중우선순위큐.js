function solution(operations) {
    const deque = [];
    operations.forEach(operation => {
        const [op, num] = operation.split(" ");
        if(op === "I"){
            deque.push(Number(num))
            deque.sort((a,b) => a - b)
        } else {
            num === "1" ? deque.pop() : deque.shift()
        }
    })
    return deque.length > 0 ? [deque.at(-1),deque[0]] : [0,0]
}