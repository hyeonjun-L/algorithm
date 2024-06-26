solution("())(")


function solution(s){
    var result = s.match(/(\(|\))/g);
    console.log(result)

    let arr = s.split('')
    if(arr.filter((bracket) => bracket === '(').length !== arr.filter((bracket) => bracket === ')').length) return false // '(',')' 개수 일치 하는지 확인
    
    const len = arr.length
    for(let i = 0; i < len / 2; i++)
    {
        if(arr.indexOf('(') < arr.indexOf(')'))
        {
            arr.splice(arr.indexOf('('),1)
            arr.splice(arr.indexOf(')'),1)
        }
        else return false
    }
    return true
}
// 효율성 테스트 실패 


/*
function solution(s) {
  let opened = 0;
  for (const bracket of s) {
    if (bracket === "(") opened += 1;
    if (bracket === ")") opened -= 1;
    if (opened < 0) return false;
  }
  return opened === 0;
}
*/

/*
function solution(s){
    let cum = 0
    for (let paren of s) {
        cum += paren === '('? 1: -1
        if(cum < 0) {
            return false
        }
    }
    return cum === 0? true: false;
}
*/