let fs = require("fs");
let input = Number(fs.readFileSync("/dev/stdin").toString().trim())

if(input >= 90) console.log('A')
else if(90 > input && input >= 80) console.log('B')
else if(80 > input && input >= 70) console.log('C')
else if(70 > input && input >= 60) console.log('D')
else console.log('F')