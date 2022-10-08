function solution(n, arr1, arr2) 
{
    let arr1_wall = new Array(n).fill('')
    
    arr1 = arr1.map(item => item.toString(2).padStart(n,"0"))
    arr2 = arr2.map(item => item.toString(2).padStart(n,"0"))
    
    console.log(arr1)
    console.log(arr2)
    
    for(let i = 0; i < n; i++)
    {
        for(let j = 0; j < n; j++)
            arr1_wall[i] += (arr1[i][j] === '1' || arr2[i][j] === '1' ? '#' : ' ')
    }
    
    return arr1_wall
}


/*
function solution(n, arr1, arr2) {
    return arr1.map((v, i) => addZero(n, (v | arr2[i]).toString(2)).replace(/1|0/g, a => +a ? '#' : ' '));
}

const addZero = (n, s) => {
    return '0'.repeat(n - s.length) + s;
}
*/

/*
var solution=(n,a,b)=>a.map((a,i)=>(a|b[i]).toString(2).padStart(n,0).replace(/0/g,' ').replace(/1/g,'#'))
*/

/*
function solution(n, arr1, arr2) {
    let arr1_wall = new Array(n).fill('')

    for(let i in arr1){
        let len = arr1[i].toString(2).length
        if(n > arr1[i].toString(2).length){
            arr1[i] = arr1[i].toString(2).split('')
            for(let j = 0; j < n - len; j++)
                arr1[i].unshift('0')
        }
        else arr1[i] = arr1[i].toString(2).split('')
    }

    for(let i in arr2){
        let len = arr2[i].toString(2).length
        if(n > arr2[i].toString(2).length){
            arr2[i] = arr2[i].toString(2).split('')
            for(let j = 0; j < n - len; j++)
                arr2[i].unshift('0')
        }
        else arr2[i] = arr2[i].toString(2).split('')
    }


    for(let i = 0; i < n; i++)
    {
        for(let j = 0; j < n; j++)
            arr1_wall[i] += (arr1[i][j] === '1' || arr2[i][j] === '1' ? '#' : ' ')
    }

    return arr1_wall
}
*/