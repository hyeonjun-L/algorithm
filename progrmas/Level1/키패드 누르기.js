function solution(numbers, hand) {
    let location = {'L' : '*', 'R' : '#'} // '왼손 오른손 위치'
    
    return numbers.map((pushnum,i) => { // '왼손 오른손 눌러야할 키패드 거리 비교 후 반환'
        if(pushnum === 1 || pushnum === 4 || pushnum === 7){ 
            location['L'] = pushnum
            return 'L'}
        if(pushnum === 3 || pushnum === 6 || pushnum === 9){ 
            location['R'] = pushnum
            return 'R'}
        else{
            if (distance(location['L'],pushnum) == distance(location['R'],pushnum)){
                hand === 'right' ? location['R'] = pushnum : location['L'] = pushnum
                return hand === 'right' ? 'R' : 'L'
            }
            else if(distance(location['L'],pushnum) > distance(location['R'],pushnum)){
                location['R'] = pushnum
                return 'R'   
            }
            else{ 
                location['L'] = pushnum
                return 'L'
            }}
    }).join('')
}

function distance(hnum, pnum) {  // 거리 계산 함수 
    let pnumx; let pnumy; let handx; let handy
    const keypad =[['*',7,4,1],[0,8,5,2],['#',9,6,3]]
    
        for(let i = 0; i < 3; i++){
            if(keypad[i].findIndex(v => v === hnum) != -1){
                handx = i
                handy = keypad[i].findIndex(v => v === hnum)}
            if(keypad[i].findIndex(v => v === pnum) != -1){
                pnumx = i
                pnumy = keypad[i].findIndex(v => v === pnum)}
            }
        return Math.abs((handx - pnumx)) + Math.abs((handy - pnumy)) 
    // 절대값(손위치x - 눌러야할 키패드 위치x) + 절대값(손위치y - 눌러야할 키패드 위치y)
}