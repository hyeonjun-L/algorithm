/*
function solution(s) {
    var answer = [];
    let sets = s
        .slice(2,-2)
        .split('},{')
        .map(set => set.split(',').map(x=>parseInt(x)))
        .sort((a,b)=> a.length-b.length)
    
    for(const set of sets) answer.push(...set.filter(x => !answer.includes(x)))
    return answer
}   

function solution(s) {
    s = s.replace(/\{|}}/g, '')
    .split('},')
    .map(value => value.split(',').map(Number))
    .sort((a,b) => a.length - b.length)
    
    s.filter((value,index) => s.indexOf(value) === index)
}
*/

function solution(s) {
    s = s.replace(/\{|}}/g, '')
    .split('},')
    .sort((a,b) => a.length - b.length)
    .join()
    .split(',')
    
    return Array.from(new Set(s)).map(Number)
}

