function solution(X, Y) {
    if(X.length > Y.length)
    {
        const C = X
        X = Y
        Y = C
    }
    X = X.split('').sort((a, b) => b - a);
    Y = Y.split('').sort((a, b) => a - b);

    let answer = [];
    let INindex = Y.length

        for (let i = 0; i < X.length; i) {
        const index = Y.lastIndexOf(X[i], INindex)
        if (index !== -1) {
            INindex = index -1
            answer[answer.length] = X[i]
            i++
            if(INindex < 0) break;
        }
        else
        {
            for(let j = 1; j < 3000000; j++){
                if(X[i] !== X[i + j])
                {
                    i += j
                    break
                }
            }
        }
    }

    if (answer.length === 0) return "-1"
    else if (answer[0] === '0') return "0"
    return answer.join('')
}