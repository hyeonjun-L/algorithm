console.log(solution("baabaa"));

function solution(s) {
  const sArray = s.split("");
  let q = [];

  sArray.forEach((s) => {
    if (q.at(-1) === s) {
      q.pop();
    } else {
      q.push(s);
    }
  });

  return q.length ? 0 : 1;
}

// function solution(s)
// {
//     s = s.split('');
//     let stack = [];
//     let stack_i = -1;

//     for(let i = 0; i <= s.length -1; i++){
//         stack[stack.length] = s[i];
//         stack_i++;
//         if(stack[stack_i -1] === stack[stack_i]){
//             stack.splice(stack_i -1,2)
//             stack_i -= 2;
//         }
//     }
//     return stack.length === 0 ? 1 : 0;
// }
