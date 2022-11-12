function solution(s) {
    let answer = [0, 0]

    while (s !== '1') {
        answer[1] += s.split('0').length - 1
        s = (s.length - (s.split('0').length - 1)).toString(2)
        answer[0]++
    }

    return answer
}