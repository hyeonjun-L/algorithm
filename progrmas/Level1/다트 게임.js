function solution(dartResult) {
    
    const Result = dartResult
    .replace(/([SDT][*#]?)/g, '$1 ')
    .replace(/[*]/g, '@')
    .replace(/[#]/g, '*(-1)')
    .replace(/[S]/g,'**1')
    .replace(/[D]/g,'**2')
    .replace(/[T]/g,'**3')
    .split(' ')
    Result.pop()           // 1S2D*3T => [ '1**1', '2**2@', '3**3' ]
    
    for(let i in Result){
        if(Result[i].indexOf('@') >= 0)
            {
                Result[i] = Result[i].substring(0, Result[i].length - 1);
                Result[i] += '*2'
                if(i > 0) Result[i-1] += '*2'
            }
    } //[ '1**1*2', '2**2*2', '3**3' ]
    
    return eval(Result.join('+')) //1**1*2+2**2*2+3**3
}

/*
function solution(dartResult) {
    const bonus = { 'S': 1, 'D': 2, 'T': 3 },
          options = { '*': 2, '#': -1, undefined: 1 };

    let darts = dartResult.match(/\d.?\D/g);
    
   for (let i = 0; i < darts.length; i++) {
        let split = darts[i].match(/(^\d{1,})(S|D|T)(\*|#)?/),
            score = Math.pow(split[1], bonus[split[2]]) * options[split[3]];

        if (split[3] === '*' && darts[i - 1]) darts[i - 1] *= options['*'];

        darts[i] = score;
    }

    return darts.reduce((a, b) => a + b);
} */