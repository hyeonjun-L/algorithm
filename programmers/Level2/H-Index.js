solution([3, 0, 6, 1, 5])

function solution(citations) {
    let answer = 0;
    citations.sort((a,b) => b-a);
    for(let i = 0; i <citations.length ; i ++) {
        if(citations[i] >= i+1 && citations[i] >= (citations.length - i)) {
            answer++;
            continue;
        }
        break;
    }    
    return answer;
}