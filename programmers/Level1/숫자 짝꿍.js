solution("5525", "1255")

function solution(X, Y) {
    const commonNumbers = [...new Set(X.split(''))].filter((number) => {
        return Y.includes(number);
    }).sort((a, b) => b - a)

    if (!commonNumbers.length) return '-1';

    if (!Number(commonNumbers[0])) return '0';

    return commonNumbers.map((number) => {
        const Xcount = X.split('').reduce((count, Xnumber) => {
            if (Xnumber === number) return count += 1;

            return count;
        }, 0)

        const Ycount = Y.split('').reduce((count, Ynumber) => {
            if (Ynumber === number) return count += 1;

            return count;
        }, 0)        

        return Xcount <= Ycount ? number.repeat(Xcount) : number.repeat(Ycount)
    }).join('')
} 

/*
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

    console.log(X)
    console.log(Y)
    console.log(answer)

    if (answer.length === 0) return "-1"
    else if (answer[0] === '0') return "0"
    return answer.join('')
}
*/

/*
function solution(X, Y) {
    X = X.split('').sort((a, b) => b - a)
    Y = Y.split('').sort((a, b) => a - b)
    console.log(X)
    console.log(Y)

    let answer = []
    let start = 0

    for (let i = 0; i < X.length; i++) {
        const [value, index] = binarySearch(Y, X[i], start, Y.length - 1)
        if (index !== -1) {
            answer[answer.length] = value
            start = index - 1
        }
    }

    console.log(answer)
    if (answer.length === 0) return "-1"
    else if (answer[0] === '0') return "0"
    else return answer.join('')
}

// ( 찾을 배열, 탐색할 값, 시작점, 끝점 )
function binarySearch(list, target, left, right) {
    let mid = 0;

    while (left <= right) {
        mid = Math.floor((left + right) / 2);

        if (list[mid] === target) {
            return [list[mid], mid]
        }

        list[mid] > target ? right = mid - 1 : left = mid + 1
    }
    return [NaN, -1]
}

*/