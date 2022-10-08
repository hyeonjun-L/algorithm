function solution(s){
    return ((s.split('p').length - 1 + s.split('P').length - 1 === s.split('y').length - 1 + s.split('Y').length - 1) ? true : false);
 }