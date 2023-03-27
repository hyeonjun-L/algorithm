function solution(cacheSize, cities) {
  const cache = [];
  let count = 0;

  for (let city of cities) {
    city = city.toLowerCase();
    const include = cache.indexOf(city);
    if (include !== -1) {
      count++;
      cache.splice(include, 1);
      cache.unshift(city);
    } else {
      count += 5;
      cache.unshift(city);
    }
    if (cache.length > cacheSize) {
      cache.pop();
    }
  }
  return count;
}
