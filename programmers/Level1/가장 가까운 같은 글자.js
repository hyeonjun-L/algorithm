solution("solutionfybdas")//

function solution(s) {
    let stack = {};
    s = s.split('');
    return s.map((value,index) => {
        console.log(stack)
        if(value in stack){ //https://developer-talk.tistory.com/175
            let before = stack[value]; 
            stack[value] = index;
            return index - before;
        }
        else{
            stack[value] = index;
            return -1;
        }
    })
}
    // let a = s.map((v,i) => i)
    // console.log(a);

    // let stack = {
    //     a: 0,
    // }

    // stack.a = 1;
    // console.log(stack.a);

    // function solution(s) {
    //     let stack = {};
    //     s = s.split('');
    //     let a = s.map((value,index) => {
    //         console.log(stack)
    //         if(stack[value]){ 비교값 0이라서 
    //             let before = stack[value]; 
    //             stack[value] = index;
    //             return index - before;
    //         }
    //         else{
    //             stack[value] = index;
    //             return -1;
    //         }
    //     })
    //     console.log(a)
    // } 