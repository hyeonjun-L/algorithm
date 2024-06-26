solution([1,2,3,4,6,7,8,0])

function solution(numbers) {
    let num = numbers.reduce((acc,val) => acc + val ,0);
    console.log(45 - num);
}