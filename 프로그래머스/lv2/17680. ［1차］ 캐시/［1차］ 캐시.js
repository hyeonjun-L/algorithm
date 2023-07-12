function solution(cacheSize, cities) {
  const cacheArr = [];
  return cities.reduce((acc, city) => {
    city = city.toLowerCase();
    const cacheIndex = cacheArr.indexOf(city);
    if (cacheIndex !== -1) {
      cacheArr.splice(cacheIndex, 1);
      cacheArr.push(city);
      acc += 1;
    } else {
      cacheArr.push(city);
      acc += 5;
    }
    if (cacheArr.length > cacheSize) {
      cacheArr.shift();
    }
    return acc;
  }, 0);
}