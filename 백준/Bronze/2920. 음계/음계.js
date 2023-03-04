const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

solution(input);

function solution(arr) {
  const ascending = "1 2 3 4 5 6 7 8";
  const descending = "8 7 6 5 4 3 2 1";

  if (arr.join(" ") === ascending) {
    console.log("ascending");
  } else if (arr.join(" ") === descending) {
    console.log("descending");
  } else {
    console.log("mixed");
  }
}