solution(3, 1, 20)
console.log((9).toString(2).padStart(6,'0'))

function solution(a, b, n) {
    let coke = 0
    while(n >= a){
       coke += Math.floor(n / a) * b
       n = n - Math.floor(n/a)*a + Math.floor(n / a) * b
    }
    return coke
}