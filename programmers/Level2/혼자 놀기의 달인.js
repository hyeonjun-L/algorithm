function solution(cards) {
    cards = cards.map(v => v - 1)
    
    let group = cards.map((v,i) => { // 각 card 선택시 점수 ex) [4, 3, 1, 4, 3, 3, 4, 4]
        let save = 0
        return Array.from(new Set(cards.map(a => {
            save = cards[v]
            v = save
            return save
        }))).length
    })
    
    const result = Array.from(new Set(group.sort((a,b) => b - a ))) // group 내림차순 정렬 및 중복 제거
    if(result[0] === cards.length) // 남는 상자 없는 경우
        return 0
    else if(result.length === 1) // 점수가 같은 경우 ex) cards= [1, 2, 3, 4, 5, 6] group= [1, 1, 1, 1, 1, 1 ]
        return result[0] * result[0]
    else return result[0] * result[1] //최고점수 * 다음 최고점수
}

/*
function solution(cards) {
    cards = cards.map(v => v - 1)
    let overlap = []
    let group1 = groupArray(cards)
    let group2 = groupArray(cards)
    
    if(group1 === cards.length)
        return 0
    else return group2 * group1
    
function minOfArray(arr) {
  let min = Infinity
  for (let i = 0; i < arr.length; i++) {
    if (min > arr[i] && i !== arr[i] && !(overlap.includes(arr[i]))) {
      min = arr[i]
    }
  }
  return min
}

function groupArray(cards){
    let i = minOfArray(cards)
    let group = []
    if(i === Infinity)
        return 1
    else{
        overlap.push(i)
        group.push(i)
        while(!(overlap.includes(cards[i])))
            {
                overlap.push(cards[i])
                group.push(cards[i])
                i = cards[i]
            }
        console.log(group)
        return group.length
        }
    }
}*/ //테스트 오류
