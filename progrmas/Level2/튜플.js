function solution(s) {
    s = s.replace(/\{|}}/g, '')
    .split('},')
    .sort((a,b) => a.length - b.length)
    .join()
    .split(',')
    
    return Array.from(new Set(s)).map(Number)
}

/*function solution(s) {
    s = s.replace(/\{|}}/g, '')
    .split('},')
    .sort((a,b) => a.length - b.length)
    .join()
    .split(',')
    
    return s.filter((value,index) => s.indexOf(value) === index).map(Number)
} // 런타임 에러 발생 10~14 */
