let fs = require("fs");
let input = Number(fs.readFileSync('/dev/stdin').toString())

if(input === 4 || input === 7) console.log(-1)
else if(input % 5 === 0) console.log(Math.floor(input/5))
else if(input%5 === 1 || input%5 === 3) console.log(Math.floor(input/5) + 1)
else if(input%5 === 2 || input%5 === 4) console.log(Math.floor(input/5) + 2)
