const [month,day] = require('fs').readFileSync('/dev/stdin').toString().split(' ').map(Number);
const dates = [0,31,28,31,30,31,30,31,31,30,31,30,31];
const days = [ "SUN","MON","TUE", "WED", "THU", "FRI", "SAT",]
let countDates = dates.slice(0,month).reduce((a,b)=>a+b)+day;
console.log(days[countDates%7]);