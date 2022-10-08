function solution(d, budget) {
    let sum = 0
    let i = 0
    let sortd = d.sort((a,b) => a-b)
    for(i ; i < sortd.length ;i++){
        if(sum + sortd[i] <= budget)
            {
               sum += sortd[i]
            }
        else break
    }
    return i
}

/*
function solution(d, budget) {
    d.sort((a, b) => a - b);

    while (d.reduce((a, b) => (a + b), 0) > budget){
        console.log(d.reduce((a, b) => (a + b), 0))
        console.log(d.pop())
    }
    console.log(d)
    return d.length;
} */

/*
function solution(d, budget) {
    return d.sort((a, b) => a - b).reduce((count, price) => {
         return console.log(count + ((budget -= price) >= 0))
    }, 0);
}
*/