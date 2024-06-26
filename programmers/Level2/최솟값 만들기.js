solution([1, 2],[3, 4])

function solution(A,B){
    A.sort((a,b) => a - b)
    B.sort((a,b) => b - a)
    
    return A.reduce((acc,val,index) => acc+= val * B[index],0)
}