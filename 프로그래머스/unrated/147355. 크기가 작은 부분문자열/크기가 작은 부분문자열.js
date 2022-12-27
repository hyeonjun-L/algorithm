function solution(t,p){
    let answer = 0;
    while(t.length >= p.length){
        if(+t.substr(-p.length) <= Number(p)) answer++;
        t = t.substr(0, t.length - 1);
    }
    return answer;
}