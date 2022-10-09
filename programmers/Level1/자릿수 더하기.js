function solution(n)
{
    let sum = [];
    while(n > 0)
    {
        sum.push(n % 10);
        n = Math.floor(n / 10);
    }
    
    var a = sum.reduce(function (tot, el, i) {return tot + el}, 0);
    
    return a;
}
/*
var a = (n + '').split('');
    var b = 0;
    for(var i = 0; i < a.length; ++i) {
        b += parseInt(a[i]);
    }
    return b;
*/

//return (n+"").split("").reduce((acc, curr) => acc + parseInt(curr), 0)