function solution(n, words){
    let dropout = 0;
    let number = 0;

    if(words.length !== new Set(words).size){
        number = Infinity;
        for(let i = 0; i <= words.length - 1; i++){
            let wordsnum = words.indexOf(words[i],i+1)
            if(wordsnum !== -1 && number > wordsnum) number = wordsnum
        }
        number++
    }

    let arr = words.join(" ").match(/[a-z](?=\s)|(?<=\s)[a-z]/g)
    for(let i = 0; i <= arr.length - 1; i+=2){
        if(arr[i] !== arr[i + 1]){
            if(!number) number = i/2+2
            else if(number > i/2+2) number = i/2+2
        }
    }

    if(!number) return [0,0]
    else return [number % n === 0 ? n : number % n,Math.ceil(number/n)]
}

