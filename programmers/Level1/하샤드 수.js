solution(12)

function solution(x) {
    const num = x.toString().split('').reduce((acc,val) => acc + Number(val),0)
    return x % num === 0 ? true : false  
}

