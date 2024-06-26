console.log(
  solution([
    ["yellow_hat", "headgear"],
    ["blue_sunglasses", "eyewear"],
    ["green_turban", "headgear"],
  ])
);
console.log(
  solution([
    ["crow_mask", "face"],
    ["blue_sunglasses", "face"],
    ["smoky_makeup", "face"],
  ])
);
console.log(
  solution([
    ["yellow_hat", "headgear"],
    ["blue_sunglasses", "eyewear"],
    ["green_turban", "headgear"],
    ["crow_mask", "face"],
    ["blue_sunglasses", "face"],
    ["smoky_makeup", "face"],
  ])
);

function solution(clothes) {
  let type = {};

  for (let clothe of clothes) {
    if (!type[clothe[1]]) {
      type[clothe[1]] = 2;
    } else {
      type[clothe[1]] += 1;
    }
  }

  return (
    Object.values(type).reduce((acc, value) => {
      return (acc *= value);
    }) - 1
  );

  // (머리 + 1) * (상의 + 1) * (하의 + 1) - 1
}
