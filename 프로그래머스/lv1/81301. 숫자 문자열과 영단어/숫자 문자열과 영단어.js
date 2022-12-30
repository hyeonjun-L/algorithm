function solution(s) {
    return Number(s.replace(/zero|one|two|three|four|five|six|seven|eight|nine/g, function(value){
        
        switch(value){
            case "nine" : return '9'
            case "eight" : return '8'
            case "seven" : return '7'
            case "six" : return '6'
            case "five" : return '5'
            case "four" : return '4'
            case "three" : return '3'
            case "two" : return '2'
            case "one" : return '1'
            case "zero" : return '0'
        }
    }));
}