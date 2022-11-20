function solution(n) {
    let count = 0;
    for(let i = 1 ; i <= Math.sqrt(n) ; i++){
        if(n % i === 0) {
            count+= i;
            if(n / i != i) count+= Math.floor(n/i);
        }
    }
    return count
}