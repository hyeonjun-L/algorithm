function solution(n, t, m, p) {
    let string = "";
    let order = p;
    for(let i = 1; i < t * m + 1;i++){
         string +=(i - 1).toString(n).toUpperCase()
    }
    
    return string.split("").map((value, index) => {
        if((index + 1) % order === 0){
            order += m
            return value
        }
    }).join("").slice(0,t)
}