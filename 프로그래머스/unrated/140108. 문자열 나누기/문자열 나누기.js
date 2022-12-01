function solution(s) {
    let x = [];
    let dx = [];
    let answer = 0;
    s.split('').forEach(element => {
        !x[0] || x[x.length - 1] === element ? x[x.length] = element : dx[dx.length] = element;
        if (x.length === dx.length) {
            x = [];
            dx = [];
            answer++;
        }
    });
    return (x[0] ? ++answer : answer)
}