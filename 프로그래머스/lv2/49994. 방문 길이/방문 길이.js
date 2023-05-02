function solution(dirs) {
  const visted = {};
  let currentLocation = [0, 0];
  let answer = 0;

  for (let move of dirs) {
    let [x, y] = currentLocation;
    let [beforeX, beforeY] = [x, y];
    if (move === "U" && y < 5) {
      y += 1;
    } else if (move === "D" && y > -5) {
      y -= 1;
    } else if (move === "R" && x < 5) {
      x += 1;
    } else if (move === "L" && x > -5) {
      x -= 1;
    } else {
      continue;
    }

    if (
      !(
        visted[`${x},${y},${beforeX},${beforeY}`] ||
        visted[`${beforeX},${beforeY},${x},${y}`]
      )
    ) {
      answer++;
    }

    currentLocation = [x, y];
    visted[`${x},${y},${beforeX},${beforeY}`] = 1;
  }
  return answer;
}