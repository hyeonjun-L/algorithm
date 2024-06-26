keyboard(["ABACD", "BCEFD"], ["ABCD", "AABB"]);

type See = {
  [key: string]: number;
};

function keyboard(keymaps: string[], targets: string[]): number[] {
  let seen: See = {};

  return targets.map((target) => {
    let number = 0;
    const chars = target.split("");
    for (let i = 0; i < chars.length; i++) {
      const char = chars[i];
      if (seen[char] && seen[char] !== -1) {
        number += seen[char];
      } else if (seen[char] === -1) {
        return -1;
      } else {
        let min = Infinity;
        for (let j = 0; j < keymaps.length; j++) {
          const index = keymaps[j].indexOf(char);
          if (index !== -1) {
            min = Math.min(min, index + 1);
          }
        }
        if (min < Infinity) {
          seen[char] = min;
          number += min;
        } else {
          seen[char] = -1;
          return -1;
        }
      }
    }
    return number;
  });
}
