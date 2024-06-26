console.log(
  solution(["nami", "ahri", "jayce", "garen", "ivern", "vex", "jinx"])
);

function solution(names) {
  return names.filter((value, index) => index % 5 === 0);
}
