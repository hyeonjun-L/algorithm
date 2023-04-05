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
}
