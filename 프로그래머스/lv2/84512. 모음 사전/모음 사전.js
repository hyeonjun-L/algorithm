function solution(word) {
  const words = { A: "E", E: "I", I: "O", O: "U", U: "U" };

  function dfs(text, count) {
    if (text === word) {
      return count;
    }

    if (text.length !== 5) {
      text += "A";
      return dfs(text, count + 1);
    } else if (text[text.length - 1] === "U") {
      while (text[text.length - 1] === "U") {
        text = text.slice(0, -1);
      }
      text = text.slice(0, -1) + words[text[text.length - 1]];
      return dfs(text, count + 1);
    } else {
      let lastWord = text[text.length - 1];
      text = text.slice(0, -1) + words[lastWord];
      return dfs(text, count + 1);
    }
  }

  return dfs("A", 1);
}