console.log(solution(78));

function findOne(n) {
  return n.toString(2).split("1").length - 1;
}

function solution(n) {
  let bignum = n + 1;
  let bigNumLength = findOne(bignum);
  n = findOne(n);

  while (n !== bigNumLength) {
    bignum += 1;
    bigNumLength = findOne(bignum);
  }

  return bignum;
}
