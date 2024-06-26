solution(3, ["tank", "tank", "kick", "know", "wheel", "land", "dream","mother", "tank", "aick"])

function solution(n, words) {

    var fail_i = -1;
    for(var i = 1; i < words.length; i++){
        var val = words[i];
        // 전단계의 끝말과 현단계 첫말이 다를 경우
        if(words[i-1].substring(words[i-1].length-1) != val.substring(0, 1)) {
            fail_i = i;
            break;
        } 
        // indexOf 함수는 첫번째로 값이 맞는 인덱스만 반환하므로
        // 현재 인덱스와 맞지 않을 경우 중복된 값
        if(words.indexOf(val) != i) {
            fail_i = i;
            break;
        }
    }

    if(fail_i == -1) return [0,0];

    var no = fail_i%n + 1;
    var turn = Math.floor(fail_i/n) + 1; 

    console.log([no, turn]);
}


/*
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

    if(!number) console.log([0,0])
    else return console.log([number % n === 0 ? n : number % n,Math.ceil(number/n)])
}
*/

/*
function solution(n, words){
    let lossNumber = 0;
    lossNumber = reduplication(words)
    lossNumber = lastAndFirst(words,lossNumber);

    if(!lossNumber) return [0,0]
    else return [lossNumber % n === 0 ? n : lossNumber % n,Math.ceil(lossNumber/n)]
}

function reduplication(arr){
    let num = 0;
    if(arr.length !== new Set(arr).size){
        for(let i = 0; i <= arr.length - 1; i++){
            if(arr.indexOf(arr[i]) !== -1) num = i + 1;
        }
    }
    return num;
}

function lastAndFirst(arr, lossNumber){
    arr = arr.join(" ").match(/[a-z](?=\s)|(?<=\s)[a-z]/g);
    for(let i = 0; i <= arr.length - 1; i+=2){
        if(arr[i] !== arr[i + 1]){
            if(!lossNumber) return i/2+2;
            else if(lossNumber > i/2+2) return i/2+2;
        }
    }
}
*/