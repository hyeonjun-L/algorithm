function solution(survey, choices) {
    let Character = {'R' : 0, 'T' : 0, 'C' : 0, 'F' : 0, 'J' : 0, 'M' : 0, 'A' : 0, 'N' : 0}
    let answer = ''

    for(let i = 0; i < survey.length; i++){
        let [First, Second] = survey[i].split('')
        choices[i] - 4 < 0 ? Character[First] += Math.abs(choices[i] - 4) : Character[Second] += choices[i] - 4
    }

    for(let i = 0; i < 7; i+=2){
        answer += Object.values(Character)[i] >= Object.values(Character)[i+1] ? Object.keys(Character)[i] : Object.keys(Character)[i+1]
    }

    return answer
}