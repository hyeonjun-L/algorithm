function solution(s)
{
    s = s.split('');
    let stack = [];
    let stack_i = -1;

    for(let i = 0; i <= s.length -1; i++){
        stack[stack.length] = s[i];
        stack_i++;
        if(stack[stack_i -1] === stack[stack_i]){
            stack.pop()
            stack.pop()
            stack_i -= 2;
        }
    }
    
    return stack.length === 0 ? 1 : 0;
}