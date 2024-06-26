const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt"
let n = Number(fs.readFileSync(filePath).toString().trim())
let cnt = 0;

if(n < 100) console.log(n)
else{ for(let i = 100; i <= n; i++){
        let hund = Math.floor(i/100)
        let ten = Math.floor((i%100)/10)
        let one = Math.floor(i%10)
         if ((hund - ten) === (ten - one))
            cnt++
        }
    console.log(99+cnt)}