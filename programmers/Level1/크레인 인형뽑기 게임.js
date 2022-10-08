function solution(board, moves) {
    moves = moves.map(v => v - 1)
    let basket = []
    let basket_i = -1
    let result = 0

    moves.forEach(v => {
        for(let i = 0; i<board.length; i++)
        {
            if(board[i][v] !== 0)
            { //빈칸 아닌곳
                basket.push(board[i][v])
                board[i][v] = 0
                basket_i++
                if(basket[basket_i - 1] === basket[basket_i])
                    {
                        basket.pop()
                        basket.pop()
                        basket_i -=2
                        result += 2
                    }
                break;
            }
        }
    })
    return result;
}