function solution(babbling) {
    const regexp1 = /(aya|ye|woo|ma)\1+/;
    const regexp2 = /^(aya|ye|woo|ma)+$/;
    console.log(regexp1.test("woowoomayeye"))

    return babbling.reduce((ans, word) => (
      !regexp1.test(word) && regexp2.test(word) ? ++ans : ans
    ), 0);
  }