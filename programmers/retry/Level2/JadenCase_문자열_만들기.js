console.log(solution("3people unFollowed me"));
console.log(solution("for the last week"));

function solution(s) {
  return s
    .split(" ")
    .map((words) =>
      words
        .split("")
        .map((word, index) =>
          index === 0 ? word.toUpperCase() : word.toLowerCase()
        )
        .join("")
    )
    .join(" ");
}

function solution(s) {
  return s
    .split(" ")
    .map((v) => v.charAt(0).toUpperCase() + v.substring(1).toLowerCase())
    .join(" ");
}
