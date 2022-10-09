function solution(absolutes, signs) {
    var answer = 0
    signs.forEach((bool,index) => {
        bool == true ? answer += absolutes[index] : answer -= absolutes[index]
    })
    return answer
}


function solution(absolutes, signs) {

    return absolutes.reduce((acc, val, i) => acc + (val * (signs[i] ? 1 : -1)), 0);
}

