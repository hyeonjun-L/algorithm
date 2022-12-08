function solution(s) {
    let stack = {};
    s = s.split('');
    return s.map((value,index) => {
        if(value in stack){
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