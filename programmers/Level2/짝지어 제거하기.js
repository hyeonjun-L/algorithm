solution('baabaa')

function solution(s)
{
    if (s.length % 2 != 0) return 0; // s의 길이가 홀수라면 바로 return 0
    s = s.split('');
    let stack = [];
    let stack_i = -1;

    for(let i = 0; i <= s.length -1; i++){
        stack[stack.length] = s[i];
        stack_i++;
        if(stack[stack_i -1] === stack[stack_i]){
            stack.splice(stack_i -1,2) // stack.pop(), stack.pop()
            stack_i -= 2;
        }
    }
    return stack.length === 0 ? 1 : 0;
}



/*
for(let i =0; i < s.length -1; i++){
    if(s[i] === s[i+1]){
        s.splice(i,2);
        i !== 0 ? i -= 2 : i--;
    }
}
*/

/*
    s = s.split('')
    for(let i = s.length -1; i >= 0; i--){
        if(s[i] === s[i-1]){
            s.splice(i-1,2);
        }
    }
    return s.length === 0 ? 1 : 0;
*/