function solution(id_list, report, k) {
    report = Array.from(new Set(report)) //중복 신고 제거
    
    let blackuser = report.join(',').replace(/(\w+\s)/g, '').split(',')
    const blackuserlist = {} // 블랙리스트 명단 만들기 
    blackuser.forEach(name => { // 명단에 없는 이름이면 { 이름: 1 } 
        if (!blackuserlist[name]) blackuserlist[name] = 1 // 이미 올라간 이름이면 등장횟수++ 
        else blackuserlist[name]++ })

    report = report.join(' ').split(' ') 
    // ['muzi','frodo','apeach','frodo','frodo','neo','muzi','neo','apeach','muzi']
    return id_list.map(id => report.filter((v,i) =>
        (i == 0 || i % 2 === 0) && report[i] === id && blackuserlist[report[i+1]] >= k).length) 
        //0 과 짝수 index가 신고한 유저 ID, index +1은 신고당한 유저ID
}