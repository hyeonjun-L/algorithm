function solution(n, lost, reserve) {
    for(let i = 3; i > 0; i--){
        console.log('lost_c',i,lost = lost.map(value => {
            if(i === 3)
               return value + 1
            else if(i === 2)
                return value - 1
            else
                return value - 1
        }),'reserve : ',reserve)// lost 각각의 값 -1 => 0 => +1

        let s = lost.filter(it => reserve.includes(it)) //두 배열 중복 변수 s 저장
        console.log('중복된 수',s)
        console.log('중복 제거된 lost : ',lost = lost.filter((it) => !(s.includes(it)))) //lost 중복 수 제거
        console.log('중복 제거된 reserve : ',reserve = reserve.filter((it) => !(s.includes(it)))) //reserve 중복 수 제거
        console.log('------------------------------------------------',i)
    }
    return n - lost.length
}

function solution(n, lost, reserve) {
    let school = new Array(n).fill(1)
    lost.forEach(v => school[v-1] -= 1)
    reserve.forEach(v => school[v-1] += 1)
    
    school.forEach((v,i,arr) => {
        if(v == 2 && arr[i-1] === 0)
        {
            school[i]--
            school[i-1]++
        }
        else if(v == 2&& arr[i+1] === 0)
        {
            school[i]--
            school[i+1]++
        }
    })
    return school.filter(v => v >= 1).length
}
    