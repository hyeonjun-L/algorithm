/*
function toWeirdCase(s){
    return s.split(' ').map(i => i.split('').map((j, key) => key % 2 === 0 ? j.toUpperCase() : j).join('')).join(' ')
  }
*/

function solution(s) {
    let answer = []
    let index = 0;
    
    s.split('').forEach((val,i,arr) => {
        if(val == ' ')
        {
            index = 0
            answer.push(val)
        }
        else if (index % 2 == 0 || index == 0)
        {
            answer.push(arr[i].toUpperCase())
            index++
        }
        else
        {
            answer.push(arr[i].toLowerCase())
            index++
        }
    })
     return answer.join('')
}