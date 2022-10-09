function solution(s) {
    if(s.indexOf('e') >= 1)
        {
           return false;
        }
    else
        return (s.length == 4 || s.length == 6) && (!(isNaN(Number(s))));
    
}

//var regex = /^\d{6}$|^\d{4}$/;
//return regex.test(s);