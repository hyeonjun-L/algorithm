function solution(n) {
    current_value = n.toString(2).split('').filter(e => e === '1').length
    while(true){
        n++;
        if(current_value === n.toString(2).split('').filter(e => e === '1').length) break;
    }
    return n;
}