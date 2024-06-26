
function solution(number, limit, power) {
    let result = 0;
    for(let i = 1; i <= number; i++)
    {
        const iron = measure(i)
        iron > limit ? result += power : result += iron
    }
    return result
}

function measure(num) {
    let count = 0;
    for(let i = 1 ; i <= Math.sqrt(num) ; i++){
        if(num % i === 0) {
            count++;
            if(num / i != i) count++;
        }
    }
    return count
}