solution([4,4,4,3,3]);	

function solution(arr)
{
    return arr.filter((val,i) => val !== arr[i - 1])
}