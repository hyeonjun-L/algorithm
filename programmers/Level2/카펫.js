solution(24, 24)
function solution(brown, yellow) {
    let column = 2;
    while(true){
        column++;
        let row = Math.floor((brown + yellow) / column)
        if((column >= row) && (brown + yellow) % column === 0 && (row - 2)*(column - 2) === yellow){
            return [column, row]
        }  
    }
}

// 

/* console.log([column, row]);
            break;*/

/* 
TC 4,6,7을 통과하려면 (x-2)(y-2)==yellow를 검증해야 합니다.

예시)
(18,6) 이 주어진 값일 때, solution=[8,3]이 나와야합니다.
B B B B B B B B
B Y Y Y Y Y Y B
B B B B B B B B

아마 2중 루프(loop)를 돌린다면 width=6, height=4 에서 멈추게 될 겁니다.
멈추는 이유는 ( width*height == brown+yellow )를 했을거기 때문이죠.

여기서 문제는 solution=[6,4]는 brown=16, yellow=8 입니다.
즉 주어진 파라미터와 맞지 않는 문제가 발생합니다.

저도 한참 헤매다 발견한거라 누군가에겐 도움이 됐으면 하네요.
*/