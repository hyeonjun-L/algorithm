solution("one4seveneight23four5six71zerotwozero3")

// function solution(s) {
//     return Number(s.replace(/zero|one|two|three|four|five|six|seven|eight|nine/g, function(value){
        
//         switch(value){
//             case "nine" : return '9'
//             case "eight" : return '8'
//             case "seven" : return '7'
//             case "six" : return '6'
//             case "five" : return '5'
//             case "four" : return '4'
//             case "three" : return '3'
//             case "two" : return '2'
//             case "one" : return '1'
//             case "zero" : return '0'
//         }
//     }));
// }

function solution(s) {
    let numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    var answer = s;

    for(let i=0; i< numbers.length; i++) {
        let arr = answer.split(numbers[i]);
        console.log(arr)
        answer = arr.join(i);
        console.log(answer)
    }

    return Number(answer);
}
