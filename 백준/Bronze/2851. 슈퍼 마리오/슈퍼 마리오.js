const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

for (var i = 1; i < input.length; i++) {
  input[i] = Number(input[i - 1]) + Number(input[i]);
  if (input[i] >= 100) {
    break;
  }
}

console.log(input[i] - 100 <= 100 - input[i - 1] ? input[i] : input[i - 1]);

