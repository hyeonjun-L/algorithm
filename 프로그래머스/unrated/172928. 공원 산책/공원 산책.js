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
