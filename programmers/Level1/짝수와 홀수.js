function solution(num) {
    if(num % 2 === 1 || num % 2 === -1 ){
        return "Odd"
    }
    else if(num % 2 === 0 || num % 2 === -0){
        return "Even"
    }
}

//return num % 2 ? "Odd" : "Even";