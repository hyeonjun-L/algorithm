function solution(k, m, score) {
    score.sort((a,b) => b - a)
    let result = []
    let acc = 0
    for(i=0; i<score.length; i+=m) result.push(score.slice(i, i+m))
    
    for(i=0; i<Math.floor(score.length / m); i++)
    {
        acc += m * Math.min(...result[i])
    }

    return acc
}