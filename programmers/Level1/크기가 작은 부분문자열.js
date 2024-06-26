solution("3141592", "271")

// function solution(t, p) {
//     
//     let length = t.length - p.length;
//     for (let i = 0; i <= length; i++) {
//         if (BigInt(t) % BigInt(10 ** p.length) <= Number(p)) 
//         t = Math.floor(t / 10)
//     }
//     return answer;
// }

function solution(t,p){
    let answer = 0;
    while(t.length >= p.length){
        if(+t.substr(-p.length) <= Number(p)) answer++;
        t = t.substr(0, t.length - 1);
    }
    return answer;
}

// 
// // console.log(Math.floor(t / 10))
// // console.log(t);