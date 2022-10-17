const fs = require("fs")
let input = fs.readFileSync('/dev/stdin').toString().split(' ').map((item) => +item)

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