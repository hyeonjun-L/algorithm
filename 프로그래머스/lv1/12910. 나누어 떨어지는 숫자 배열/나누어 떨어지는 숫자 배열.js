function solution(arr, divisor) {
    let answer =  arr.sort((a,b) => a - b).filter(val => val % divisor === 0);
    return answer.length === 0 ? [-1] : answer;
}