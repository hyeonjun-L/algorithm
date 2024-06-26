solution(4, 3, [4, 1, 2, 2, 4, 4, 4, 4, 1, 2, 4, 2])

function solution(k, m, score) {
    let answer = 0;
    const sortedScore = score.sort((a, b) => a - b).slice(score.length % m);
    console.log(sortedScore)
    for (let i = 0; i < sortedScore.length; i += m) {
        answer += sortedScore[i] * m;
    }
    return answer;
}

/*
function solution(k, m, score) {
    score.sort((a, b) => b - a)
    let result = []
    let acc = 0
    for (i = 0; i < score.length; i += m) result.push(score.slice(i, i + m))

    for (i = 0; i < Math.floor(score.length / m); i++) {
        acc += m * Math.min(...result[i])
    }

    return acc
}
*/
/*
result[3].sort((a,b) => a - b)
    console.log(result)
    */