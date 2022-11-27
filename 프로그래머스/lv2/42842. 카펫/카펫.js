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