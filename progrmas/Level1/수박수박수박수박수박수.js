function solution(n) {
    let str = '';

    for (let i = 1; n/2 >= i; i++)
        str += '수박';  

    if(n % 2 === 1 )
        str += '수';

    return str;
}

//return '수박'.repeat(n/2) + (n%2 === 1 ? '수' : '');