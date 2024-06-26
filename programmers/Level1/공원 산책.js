function solution(park, routes) {
  const currentLocation = park.join("").indexOf("S");
  let [Row, Col] = [
    currentLocation % park[0].length,
    Math.floor(currentLocation / park[0].length),
  ];

  park = park.map((road) => road.split(""));
  for (let route of routes) {
    let obstacle = false;
    const [direction, move] = [route[0], Number(route[2])];
    if (direction === "E" && Row + move < park[0].length) {
      if (!park[Col].slice(Row, Row + move + 1).includes("X")) {
        Row = Row + move;
      }
    } else if (direction === "W" && Row - move >= 0) {
      if (!park[Col].slice(Row - move, Row).includes("X")) {
        Row = Row - move;
      }
    } else if (direction === "N" && Col - move >= 0) {
      for (let i = Col; i >= Col - move; i--) {
        if (park[i][Row] === "X") {
          obstacle = true;
          break;
        }
      }
      if (!obstacle) {
        Col -= move;
      }
    } else if (direction === "S" && Col + move < park.length) {
      for (let i = Col; i <= Col + move; i++) {
        if (park[i][Row] === "X") {
          obstacle = true;
          break;
        }
      }
      if (!obstacle) {
        Col += move;
      }
    }
  }
  return [Col, Row];
}

console.log(solution(["SOO", "OOO", "OOO"], ["E 2", "S 2", "W 1"])); // [2,1]
console.log(solution(["SOO", "OXX", "OOO"], ["E 2", "S 2", "W 1"])); // [0,1]
console.log(solution(["OSO", "OOO", "OXO", "OOO"], ["E 2", "S 3", "W 1"])); // [0,0]

console.log(solution(["OSO", "OOO", "OOO", "OOO"], ["W 2"])); // [0,1]
console.log(solution(["OSO", "OOO", "OOO", "OOO"], ["N 2"])); // [0,1]
console.log(solution(["OSO", "OOO", "OOO", "OOO"], ["S 5"])); // [0,1]
console.log(solution(["OSO", "OOO", "OOO", "OOO"], ["E 5"])); // [0,1]

console.log(solution(["XXX", "XSX", "XXX"], ["E 1"])); // [1,1]
console.log(solution(["XXX", "XSX", "XXX"], ["W 1"])); // [1,1]
console.log(solution(["XXX", "XSX", "XXX"], ["S 1"])); // [1,1]
console.log(solution(["XXX", "XSX", "XXX"], ["N 1"])); // [1,1]

console.log(solution(["SOXOO", "OOOOO", "OOOOO", "OOOOO", "OOOOO"], ["E 3"])); // [0, 0]
console.log(solution(["SOOOX", "OOOOO", "OOOOO", "OOOOO", "OOOOO"], ["E 3"])); // [0, 3]
console.log(solution(["XOOOS", "OOOOO", "OOOOO", "OOOOO", "OOOOO"], ["W 3"])); // [0, 1]
console.log(solution(["OOXOS", "OOOOO", "OOOOO", "OOOOO", "OOOOO"], ["W 3"])); // [0, 4]
console.log(solution(["SOOOO", "OOOOO", "XOOOO", "OOOOO", "OOOOO"], ["S 3"])); // [0, 0]
console.log(solution(["SOOOO", "OOOOO", "OOOOO", "OOOOO", "XOOOO"], ["S 3"])); // [3, 0]
console.log(solution(["OOOOO", "OOOOO", "XOOOO", "OOOOO", "SOOOO"], ["N 3"])); // [4, 0]
console.log(solution(["XOOOO", "OOOOO", "OOOOO", "OOOOO", "SOOOO"], ["N 3"])); // [1, 0]
