function solution(numbers) {
    let num = numbers.reduce((acc,val) => acc + val ,0);
    return 45 - num;
}