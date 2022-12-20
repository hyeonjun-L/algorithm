function solution(n, a, b) {
    let answer = 0;
    while (true) {
        answer++;
        a = a % 2 !== 0 ? Math.floor((a + 1) / 2) : Math.floor(a / 2)
        b = b % 2 !== 0 ? Math.floor((b + 1) / 2) : Math.floor(b / 2)
        if(a === b) break;
    }
    return answer;
}
