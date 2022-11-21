function solution(food) {
    let arr = []
    for(let i = 1; i < food.length; i++){
        for(let j = 1; j <= Math.floor(food[i] / 2); j++){
            arr[arr.length] = i
        }
    }
    return arr.join('') + '0' + arr.reverse().join('')
}