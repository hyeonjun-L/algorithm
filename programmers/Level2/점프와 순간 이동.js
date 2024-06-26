solution(5)

// function solution(n) {
//     let battery = 0;

//     while (0 !== n) {
//         if (n % 2 === 0) n = Math.floor(n / 2);
//         else {
//             n -= 1;
//             battery++;
//         }
//     }
//     return battery;
// }

// n 홀수면 건전지 사용

function solution(n){
    if(n === 1) return 1;
    const nArr = Array.from(n.toString(2));
    console.log(nArr);
    return nArr.reduce((a,b)=>(+a)+(+b));
}