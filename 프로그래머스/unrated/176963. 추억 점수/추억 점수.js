function solution(name, yearning, photos) {
  let score = {};
  for (let i in name) {
    score[name[i]] = yearning[i];
  }

  return photos.map((photo) => {
    return photo.reduce((acc, value) => {
      return score[value] ? (acc += score[value]) : acc;
    }, 0);
  });
}
