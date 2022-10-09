function solution(s) {

    if (s.length % 2 === 0)
        {
            return s.substring(s.length / 2 - 1 , s.length / 2 + 1);
        }
    else if (s.length % 2 === 1)
        {
            return s.substring(s.length/2,s.length/2 + 1 );
        }
}

//...
//return s.substr(Math.ceil(s.length / 2) - 1, s.length % 2 === 0 ? 2 : 1)

/*
function solution(s) {
    var length = s.length;
    var answer = '';

    if(!(s.length >0 && s.length<100)) {
        return;
    }

    if(length % 2 != 0) {
        answer += s.slice(length/2, length/2 +1);
    }else {
        answer += s.slice(length/2 -1, length/2 +1);
    }

    return answer;

}

var s = 'qwerty';
console.log(solution(s));

*/