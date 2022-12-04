function solution(k, score) {
    let rank = [];
    let answer = [];
    
    for(let i of score){
        rank[rank.length] = i;
        if(rank.length > k) rank[rank.indexOf(Math.min(...rank))] = 2001;
        answer[answer.length] = Math.min(...rank);
    }
    return answer;
}
