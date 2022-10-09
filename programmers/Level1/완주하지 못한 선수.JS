function solution(participant, completion) 
{ 
    const completeObj = {} // 완주자 명단 만들기 
    completion.forEach(name => { // 명단에 없는 이름이면 { 이름: 1 } 
        if (!completeObj[name]) completeObj[name] = 1 // 이미 올라간 이름이면 등장횟수++ 
        else completeObj[name]++ })
    
        return participant.find(name => {  // 참가자와 완주자 명단 비교
        if (completeObj[name]) completeObj[name]--  // 현 참가자가 완주자 명단에 있고, 값이 0이 아니면 값--
        else return name }) // 명단에 없거나 값이 0이면 리턴
}

/*
function solution(participant, completion) {
    const obj_participant = Object.assign({}, participant.sort());
    const obj_completion = Object.assign({}, completion.sort());
    
    for (let i = 0; i < participant.length; i++){
        if(obj_completion[i] != obj_participant[i] )
            return obj_participant[i]
    }
}
*/