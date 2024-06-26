

/*
function solution(ingredient) {
    let hamburger = 0
    for(let i = 0; i < ingredient.length; i++){
        if(ingredient[i] === 1)
        {
            if(ingredient[i+1] === 2 && ingredient[i+2] === 3 && ingredient[i+3] === 1){
                ingredient.splice(i,4)
                i = 0
                hamburger++
            }
        }
    }
}
*/

/*

function solution(ingredient) {
    ingredient = ingredient.join('')
    let hamburger = 0
    while(ingredient.split('1231').length -1 !== 0)
    {
        hamburger += ingredient.split('1231').length -1
        ingredient = ingredient.replace(/1231/g,'')
    }
    
    return hamburger
}

문제에서는 조리된 순서대로 포장한다고 되어 있는데,
replace 함수를 이용해 전체 배열에서 한꺼번에 [1, 2, 3, 1]을 삭제하시면 그 순서에 차질이 생겨요.

예를 들어 [1, 1, 2, 3, 1, 2, 1, 2, 3, 1, 3, 1, 2, 3, 1, 1] 와 같이 주어졌을 때,

문제에서 원하는 풀이대로라면,
[1, [1, 2, 3, 1], 2, 1, 2, 3, 1, 3, 1, 2, 3, 1, 1] > 지금까지 포장된 햄버거 : 1
[1, 2, [1, 2, 3, 1], 3, 1, 2, 3, 1, 1] > 지금까지 포장된 햄버거 : 2
[[1, 2, 3, 1], 2, 3, 1, 1] > 지금까지 포장된 햄버거 : 3
[2, 3, 1, 1] >> 이렇게 답은 3이 되어야 합니다.

그런데 replace 함수를 이용해 [1, 2, 3, 1] 을 일괄적으로 삭제하면,
[1, [1, 2, 3, 1], 2, [1, 2, 3, 1], 3, [1, 2, 3, 1], 1] > 지금까지 포장된 햄버거 : 3
[1, 2, 3, 1] >> 마지막이 [1, 2, 3, 1]이 되면서 포장된 햄버거는 4개가 되고 이는 틀린 답이에요.

핵심은 재료가 쌓이는 순서대로 포장을 하는 것입니다 !
*/

/*


function solution(ingredient) {
    ingredient = ingredient.join('')
    let hamburger = 0

    while(ingredient.split('1231').length -1 !== 0)
    {
        hamburger ++
        ingredient = ingredient.replace(/1231/,'')
    }
    
    return hamburger
}
*/

/*
function solution(ingredient) {
    let stack = []
    let hamburger = 0

    while(ingredient.length != 0){
        stack[stack.length] = ingredient.shift()
            if(stack[stack.length -1] === 1 && stack[stack.length -2] === 3 && stack[stack.length -3] === 2 && stack[stack.length -4] === 1)
            {
                hamburger ++
                stack.splice(-4)
            }
    }
    return hamburger
}

상기 코드와 하기 코드 비교 결과 shift 매소드의 시간복잡도가 더 걸려 통과 못함 https://blue-jay.tistory.com/30

function solution(ingredient) {
    let stk = [];
    let count = 0;
    for (let i = 0; i < ingredient.length; i++) {
        stk.push(ingredient[i]);
        if (
            stk[stk.length-1] === 1 &&
            stk[stk.length-2] === 3 &&
            stk[stk.length-3] === 2 &&
            stk[stk.length-4] === 1
        ) {
            count++;
            stk.splice(-4);
        }
    }
    return count;
}
*/


solution([1, 1, 2, 3, 1, 2, 1, 2, 3, 1, 3, 1, 2, 3, 1, 1])

function solution(ingredient) {
    let hamburger = 0

    for (let i = 0; i < ingredient.length; i++) {
        if (ingredient.slice(i, i + 4).join('') === '1231') {
            hamburger++;
            ingredient.splice(i, 4);
            i -= 3;
        }
    }

    return hamburger;
}