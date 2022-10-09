function solution(s, n) {  
    let answer = ''
    for(index in s){
        let ASCII = s.charCodeAt(index)
        if(s[index] === ' ')
            answer += ' '
        else if(ASCII > 96)
            ASCII + n > 122 ? answer += String.fromCharCode(ASCII + n - 122 + 96) : answer += String.fromCharCode(ASCII + n)
        else
            ASCII + n > 90 ? answer += String.fromCharCode(ASCII + n - 90 + 64) : answer += String.fromCharCode(ASCII + n)
    }
    return answer

}
