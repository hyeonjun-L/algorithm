solution(4, [0, 300, 40, 300, 20, 70, 150, 50, 500, 1000])
/*
function solution(k, score) {
    let honorList = score.slice(0, k);
    let answer = new Array(score.length).fill(Math.min(...honorList), 0, k);

    for (let i = k; i < score.length; i++) {
        const min = Math.min(...honorList);
        if (min < score[i]) {
            honorList[honorList.indexOf(min)] = score[i];
            answer[i] = Math.min(...honorList);
        }
        else answer[i] = min;
    }
    return answer;
}

function solution(k, score) {
    let rank = score.slice(0, k);
    let answer = new Array(score.length).fill(Math.min(...rank), 0, k);

    return rank.reduce((answer, c) => {
        rank.push(c)
        rank.sort((a, b) => a - b)
        if (rank.length > k) rank.shift()
        answer.push(rank[0])
        return answer
    }, [])
}
*/

function solution(k, score) {
    let rank = [];
    let answer = [];
    
    for(let i of score){
        rank[rank.length] = i;
        rank[rank.indexOf(Math.min(...rank))] = 2001;
        answer[answer.length] = Math.min(...rank);
    }
    return answer;
}
