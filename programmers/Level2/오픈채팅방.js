function solution(record) {
    const status = {} // 유저 닉네임 상태

    for(let i = 0; i < record.length; i++) { // 유저 마지막 닉네임 저장 {ID : 닉네임}
        let split = record[i].match(/(^\w{5,6})\s(\w{1,10})\s?(\w{1,10})?/)
        if(split[1] === 'Enter' || split[1] === 'Change')
            status[split[2]] = split[3]
    }

    return record.map((mesage,index) =>{ // 메세지 배열
        let split = record[index].match(/(^\w{5,6})\s(\w{1,10})\s?(\w{1,10})?/)
        if(split[1] === 'Enter')
            return status[split[2]] + '님이 들어왔습니다.'
        else if(split[1] === 'Leave')
            return status[split[2]] + '님이 나갔습니다.'
        else return null //change 메세지 제거
    }).filter(v => v != null)
}

/*
unction solution(record) {
    const userInfo = {};
    const action = [];
    const stateMapping = {
        'Enter': '님이 들어왔습니다.',
        'Leave': '님이 나갔습니다.'
    }

    record.forEach((v) => {
        const [state, id, nick] = v.split(' ');

        if(state !== "Change") {
            action.push([state, id]);
        }

        if(nick) {
            userInfo[id] = nick;
        }
    })

    return action.map(([state, uid]) => {
        return `${userInfo[uid]}${stateMapping[state]}`;    
    })
}

*/