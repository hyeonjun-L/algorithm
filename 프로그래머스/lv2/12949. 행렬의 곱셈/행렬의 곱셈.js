function solution(arr1, arr2) {
    var answer = [];

    let X = arr1.length;
    let Y = arr2[0].length;

    for(let i =0; i < X;i++){
        let tmp =[]
        for(let j =0; j < Y;j++){
            tmp.push(arr1[i].reduce((acc,cur,index)=>acc += cur*arr2[index][j],0))
        }
        answer.push(tmp)
    }

    return answer;
}