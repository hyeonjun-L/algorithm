function solution(quiz) {
  return quiz.map((value) => {
    if (
      eval(value.slice(0, value.indexOf("="))) ==
      value.slice(value.indexOf("=") + 2)
    ) {
      return "O";
    } else {
      return "X";
    }
  });
}
