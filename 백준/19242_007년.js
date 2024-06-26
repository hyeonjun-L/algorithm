/*
const fs = require("fs")
let input = fs.readFileSync(__dirname + "/input.txt").toString().split(' ').map((item) => +item) // '/dev/stdin'

const testCase = {
    month : input[0],
    day : input[1],
  }

  solution(testCase['month'],testCase['day'])

function DayOfTheWeek(val){
    switch(val) {
        case 1 :
            console.log('MON')
            break
        case 2 :
            console.log('TUE')
            break
        case 3 :
            console.log('WED')
            break
        case 4 :
            console.log('THU')
            break
        case 5 :
            console.log('FRI')
            break
        case 6 :
            console.log('SAT')
            break
        case 0 :
            console.log('SUN')
            break
    }
}

function solution(A,B) {
    switch(A) {
        case 1 : 
            DayOfTheWeek(B%7)
            break
        case 2 : 
            DayOfTheWeek((B+31)%7)
            break
        case 3 : 
            DayOfTheWeek((B+59)%7)
            break
        case 4 : 
            DayOfTheWeek((B+90)%7)
            break
        case 5 : 
            DayOfTheWeek((B+120)%7)
            break
        case 6 : 
            DayOfTheWeek((B+151)%7)
            break
        case 7 : 
            DayOfTheWeek((B+181)%7)
            break
        case 8 : 
            DayOfTheWeek((B+212)%7)
            break
        case 9 : 
            DayOfTheWeek((B+243)%7)
            break
        case 10 : 
            DayOfTheWeek((B+273)%7)
            break
        case 11 : 
            DayOfTheWeek((B+304)%7)
            break
        case 12 : 
            DayOfTheWeek((B+334)%7)
            break
        
    }
}
*/

/*
const [month,day] = require('fs').readFileSync('/dev/stdin').toString().split(' ').map(Number);
const dates = [0,31,28,31,30,31,30,31,31,30,31,30,31];
const days = [ "SUN","MON","TUE", "WED", "THU", "FRI", "SAT",]
let countDates = dates.slice(0,month).reduce((a,b)=>a+b)+day;
console.log(days[countDates%7]);
*/

/*
const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim();

let [m, d] = input.split(' ').map(v=>+v);

console.log(['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'][new Date(2007,m-1,d).getDay()])
*/

const dates = [0,31,28,31,30,31,30,31,31,30,31,30,31];
const days = [ "SUN","MON","TUE", "WED", "THU", "FRI", "SAT",]
let countDates = dates.slice(0,5).reduce((a,b)=>a+b);
console.log(countDates);