const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let n; 

rl.on("line", (line) => {
  if (!n) {
    n = parseInt(line);
  } else {
    const [x, y] = line.split(" ").map((num) => parseInt(num));
    if (x >= y) {
      console.log("MMM BRAINS");
    } else {
      console.log("NO BRAINS");
    }
    if (--n === 0) {
      rl.close();
    }
  }
});