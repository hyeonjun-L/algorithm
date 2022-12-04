function solution(k, score) {
    const stack = []
    return score.reduce((a, c) => {
        stack.push(c)
        stack.sort((a, b) => a - b)
        if (stack.length > k) stack.shift()
        a.push(stack[0])
        return a
    }, [])
} 

